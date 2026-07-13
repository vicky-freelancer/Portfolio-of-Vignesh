import { Particles } from "./particles";

export default function ParticlesDemo() {
  return (
    <div className="relative bg-black w-full h-100 overflow-hidden">
      <Particles
        color="#ffffff"
        particleCount={25000}
        particleSize={5}
        animate={false}
        className="z-0"
      />
    </div>
  );
}
