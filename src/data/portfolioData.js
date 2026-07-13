// ===== Portfolio Data Configuration =====
// Update this file with your personal information

export const personalInfo = {
    name: "Vignesh S",
    firstName: "Vignesh",
    lastName: "S",
    role: "MERN Stack Developer",
    roleSecondary: "SEO Expert",
    tagline: "Crafting high-performance web experiences & driving organic growth",
    location: "Trichy, India",
    email: "vigneshs7227@gmail.com",
    phone: "8270340212",
    experience: "2+",
    experienceLabel: "Years of Experience",
    bio: `I'm a passionate MERN Stack Developer and SEO Expert with over 2 years of freelance experience. 
  I specialize in building scalable, performant web applications using MongoDB, Express.js, React, and Node.js, 
  while also driving measurable organic growth through data-driven SEO strategies.`,
    resumeLink: "/resume.pdf",
    social: {
        github: "https://github.com/vicky-freelancer?tab=repositories",
        linkedin: "https://www.linkedin.com/in/vignesh-7227-s",
        twitter: "https://twitter.com/vignesh",
        email: "mailto:vigneshs7227@gmail.com",
    },
    profileImage: "/profile.jpg", // Add path to profile image
};

export const aboutData = {
    summary: `I'm Vignesh S, a dedicated MERN Stack Developer and SEO Expert based in Trichy, India. 
  With over 2 years of hands-on freelance experience, I combine technical development skills with 
  deep SEO knowledge to deliver web solutions that not only look great but also rank well on search engines.`,
    careerGoals: `My goal is to build innovative, user-centric web applications that solve real-world problems 
  while helping businesses achieve maximum online visibility. I aim to bridge the gap between exceptional 
  development and strategic SEO to create holistic digital solutions.`,
    seoExpertise: `My SEO expertise spans on-page optimization, technical SEO audits, keyword research & strategy, 
  content optimization, link building, and analytics-driven decision making. I leverage tools like Google Analytics, 
  Search Console, Ahrefs, and SEMrush to deliver data-backed SEO strategies that drive measurable results.`,
    techStack: [
        { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript ES6+", "HTML5", "CSS3"] },
        { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "GraphQL"] },
        { category: "Database", items: ["MongoDB", "Mongoose", "Firebase", "MySQL"] },
        { category: "SEO Tools", items: ["Google Analytics", "Search Console", "Ahrefs", "SEMrush", "Screaming Frog"] },
        { category: "DevOps", items: ["Git", "GitHub", "Vercel", "Netlify", "Docker", "Linux"] },
        { category: "Other", items: ["Figma", "VS Code", "Postman", "Jira", "Notion"] },
    ],
};

export const educationData = [
    {
        id: 1,
        degree: "Bachelor of Computer Application",
        institution: "Bharathidasan University, Trichy",
        year: "2020 – 2024",
        grade: "7.5 CGPA",
        highlights: [
            "Specialized in Web Technologies & Database Management",
            "Led the college tech club and organized hackathons",
            "Completed capstone project on E-Commerce platform using MERN stack",
            "Published research paper on SEO algorithm optimization",
        ],
    },
    {
        id: 2,
        degree: "Higher Secondary (12th)",
        institution: "St. John's Vestry AI Higher Secondary School, Trichy",
        year: "2019 – 2020",
        grade: "72%",
        highlights: [
            "Computer Science stream with distinction",
            "Won inter-school coding competition",
            "School tech magazine editor",
        ],
    },
];

export const experienceData = [
    {
        id: 1,
        title: "Freelance MERN Stack Developer",
        company: "Self-Employed",
        period: "2024 – Present",
        type: "Freelance",
        description: "Building full-stack web applications for clients globally, specializing in React-based frontends and Node.js backends with MongoDB databases.",
        achievements: [
            "Delivered 15+ client projects across e-commerce, SaaS, and portfolio verticals",
            "Maintained a 5-star rating on freelance platforms with 100% client satisfaction",
            "Reduced client website load times by 60% through optimization techniques",
            "Implemented CI/CD pipelines for automated deployment workflows",
        ],
    },
    {
        id: 2,
        title: "SEO Consultant",
        company: "Freelance",
        period: "2023 – Present",
        type: "Freelance",
        description: "Providing comprehensive SEO consulting services including technical audits, keyword research, on-page optimization, and performance tracking.",
        achievements: [
            "Increased organic traffic by 300% for 5+ client websites",
            "Achieved first-page rankings for 50+ competitive keywords",
            "Conducted technical SEO audits that improved Core Web Vitals scores by 40%",
            "Developed content strategies that boosted engagement by 200%",
        ],
    },
    {
        id: 3,
        title: "Web Development Intern",
        company: "TechSoft Solutions",
        period: "2023 (6 months)",
        type: "Internship",
        description: "Collaborated with senior developers to build responsive web applications and gained hands-on experience with modern development workflows.",
        achievements: [
            "Contributed to 3 production-level React applications",
            "Implemented responsive designs achieving 98% mobile compatibility",
            "Participated in agile sprints and daily standups",
            "Built reusable component library used across 4 projects",
        ],
    },
];

export const certificatesData = [
    {
        id: 1,
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (via Coursera)",
        date: "2024",
        credentialUrl: "#",
        image: null,
    },
    {
        id: 2,
        title: "Google SEO Fundamentals",
        issuer: "Google (via Coursera)",
        date: "2023",
        credentialUrl: "#",
        image: null,
    },
    {
        id: 3,
        title: "MongoDB Developer Certification",
        issuer: "MongoDB University",
        date: "2024",
        credentialUrl: "#",
        image: null,
    },
    {
        id: 4,
        title: "HubSpot SEO Certification",
        issuer: "HubSpot Academy",
        date: "2023",
        credentialUrl: "#",
        image: null,
    },
    {
        id: 5,
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialUrl: "#",
        image: null,
    },
    {
        id: 6,
        title: "React Advanced Patterns",
        issuer: "Frontend Masters",
        date: "2024",
        credentialUrl: "#",
        image: null,
    },
];

export const projectsData = [
    {
        id: 1,
        title: "ShopNest – E-Commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, cart system, payment integration via Stripe, and admin dashboard. Built with performance and scalability in mind.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
        category: "MERN",
        liveUrl: "https://shopnest-demo.vercel.app",
        githubUrl: "https://github.com/vignesh/shopnest",
        featured: true,
        images: [],
    },
    {
        id: 2,
        title: "SEO Analyzer Pro",
        description: "An advanced SEO analysis tool that provides comprehensive website audits, keyword tracking, backlink analysis, and actionable recommendations. Helped clients improve their search rankings significantly.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Charts.js", "Puppeteer"],
        category: "SEO",
        liveUrl: "https://seo-analyzer-demo.vercel.app",
        githubUrl: "https://github.com/vignesh/seo-analyzer",
        featured: true,
        images: [],
    },
    {
        id: 3,
        title: "TubeAutomator – YouTube Shorts Tool",
        description: "An AI-powered tool that automates YouTube Shorts creation by extracting highlights from long-form videos, generating captions, and optimizing for engagement. Built with FFmpeg and Gemini AI.",
        techStack: ["React", "Node.js", "Express", "FFmpeg", "Gemini AI", "MongoDB"],
        category: "Automation",
        liveUrl: "https://tube-automator.vercel.app",
        githubUrl: "https://github.com/vignesh/tube-automator",
        featured: true,
        images: [],
    },
    {
        id: 4,
        title: "TaskFlow – Project Management App",
        description: "A collaborative project management application with real-time updates, kanban boards, team management, and progress tracking. Features WebSocket-based live collaboration.",
        techStack: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS"],
        category: "MERN",
        liveUrl: "https://taskflow-demo.vercel.app",
        githubUrl: "https://github.com/vignesh/taskflow",
        featured: false,
        images: [],
    },
    {
        id: 5,
        title: "BlogSphere – CMS & Blog Platform",
        description: "A modern content management system with rich text editing, SEO optimization features, analytics dashboard, and multi-author support. Designed for content creators and marketers.",
        techStack: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "QuillJS"],
        category: "MERN",
        liveUrl: "https://blogsphere-demo.vercel.app",
        githubUrl: "https://github.com/vignesh/blogsphere",
        featured: false,
        images: [],
    },
    {
        id: 6,
        title: "Local Business SEO Case Study",
        description: "Comprehensive SEO strategy for a local restaurant chain that resulted in 400% increase in organic traffic and top 3 rankings for 25+ local keywords within 6 months.",
        techStack: ["Google Analytics", "Search Console", "Ahrefs", "Schema Markup"],
        category: "SEO",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        images: [],
    },
];

export const seoCaseStudies = [
    {
        id: 1,
        title: "E-Commerce Store – Organic Traffic Boost",
        client: "Fashion Retail Brand",
        duration: "6 months",
        overview: "Implemented comprehensive SEO strategy for a fashion e-commerce store, focusing on technical SEO, content optimization, and link building.",
        results: [
            { metric: "Organic Traffic", before: "2,500/mo", after: "12,000/mo", growth: "+380%" },
            { metric: "Keyword Rankings", before: "5 keywords in top 10", after: "45 keywords in top 10", growth: "+800%" },
            { metric: "Revenue from Organic", before: "$3,200/mo", after: "$18,500/mo", growth: "+478%" },
            { metric: "Domain Authority", before: "DA 15", after: "DA 38", growth: "+153%" },
        ],
        strategies: [
            "Technical SEO audit & implementation (fixed 200+ crawl issues)",
            "Keyword research & content mapping for 100+ product pages",
            "Schema markup implementation for rich snippets",
            "Internal linking optimization & site architecture redesign",
            "Quality backlink acquisition from 30+ relevant domains",
        ],
    },
    {
        id: 2,
        title: "SaaS Platform – B2B Lead Generation",
        client: "HR Tech Startup",
        duration: "8 months",
        overview: "Developed a content-driven SEO strategy for a B2B SaaS platform targeting HR professionals, resulting in significant lead generation improvement.",
        results: [
            { metric: "Organic Traffic", before: "800/mo", after: "8,500/mo", growth: "+962%" },
            { metric: "Lead Conversions", before: "12/mo", after: "85/mo", growth: "+608%" },
            { metric: "Blog Traffic", before: "200/mo", after: "5,200/mo", growth: "+2500%" },
            { metric: "Featured Snippets", before: "0", after: "12", growth: "New" },
        ],
        strategies: [
            "Comprehensive keyword research targeting high-intent B2B queries",
            "Content hub creation with pillar pages and topic clusters",
            "Technical SEO improvements (Core Web Vitals optimization)",
            "Conversion rate optimization on landing pages",
            "Guest posting and digital PR for authority building",
        ],
    },
    {
        id: 3,
        title: "Local Business – Google Maps Domination",
        client: "Restaurant Chain (3 locations)",
        duration: "4 months",
        overview: "Local SEO campaign for a multi-location restaurant chain, focusing on Google Business Profile optimization and local search visibility.",
        results: [
            { metric: "Google Maps Views", before: "1,200/mo", after: "8,900/mo", growth: "+641%" },
            { metric: "Direction Requests", before: "45/mo", after: "320/mo", growth: "+611%" },
            { metric: "Phone Calls", before: "60/mo", after: "280/mo", growth: "+367%" },
            { metric: "Local Pack Rankings", before: "Not ranking", after: "Top 3 for 15 keywords", growth: "New" },
        ],
        strategies: [
            "Google Business Profile optimization for all 3 locations",
            "Local citation building and NAP consistency audit",
            "Review generation strategy (increased reviews by 300%)",
            "Local content creation targeting neighborhood keywords",
            "Local link building from community organizations",
        ],
    },
];

export const skillsData = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "MongoDB", level: 88, category: "Database" },
    { name: "Express.js", level: 90, category: "Backend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 92, category: "Frontend" },
    { name: "TypeScript", level: 78, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "SEO", level: 93, category: "SEO" },
    { name: "Google Analytics", level: 90, category: "SEO" },
    { name: "Ahrefs", level: 85, category: "SEO" },
    { name: "Technical SEO", level: 92, category: "SEO" },
    { name: "Git & GitHub", level: 88, category: "Tools" },
    { name: "Docker", level: 70, category: "DevOps" },
    { name: "REST APIs", level: 92, category: "Backend" },
    { name: "Figma", level: 75, category: "Design" },
];

export const statsData = [
    { label: "Projects Completed", value: 25, suffix: "+" },
    { label: "Happy Clients", value: 15, suffix: "+" },
    { label: "Keywords Ranked", value: 100, suffix: "+" },
    { label: "Years Experience", value: 2, suffix: "+" },
];

export const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "SEO Studies", path: "/seo-case-studies" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
];
