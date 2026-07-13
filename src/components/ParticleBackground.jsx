import { useRef, useEffect } from 'react';

/**
 * Animated Particle Network (Constellation) Background
 * High-performance canvas-based animation
 */
const ParticleBackground = ({ isDark }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const particleCount = 120; // Increased density
        const connectionDistance = 160; // Increased reach
        const mouseRadius = 180;

        let mouse = { x: null, y: null };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Slightly more dynamic speed
                this.vx = (Math.random() - 0.5) * 0.7;
                this.vy = (Math.random() - 0.5) * 0.7;
                this.size = Math.random() * 2.5 + 1;
                // Neon blue and cyan particles
                this.color = Math.random() > 0.5 ? '#6366f1' : '#22d3ee';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction - pull effect
                if (mouse.x !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        this.x += dx * force * 0.03;
                        this.y += dy * force * 0.03;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                // Add neon glow to particles for attractiveness
                ctx.shadowBlur = isDark ? 10 : 0;
                ctx.shadowColor = this.color;

                ctx.fillStyle = isDark ? this.color : '#4f46e5';
                ctx.globalAlpha = isDark ? 0.6 : 0.5;
                ctx.fill();

                // Reset shadow for performance
                ctx.shadowBlur = 0;
                ctx.globalAlpha = 1;
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        const opacity = (1 - distance / connectionDistance) * (isDark ? 0.5 : 0.4);

                        // Attractive neon blue connection lines
                        ctx.strokeStyle = isDark ? '#6366f1' : '#4f46e5';
                        ctx.globalAlpha = opacity;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial setup
        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-50"
            style={{ filter: 'blur(0.5px)' }}
        />
    );
};

export default ParticleBackground;
