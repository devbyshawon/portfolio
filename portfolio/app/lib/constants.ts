// Project data - UPDATE WITH YOUR ACTUAL LINKS
export const projects = [
  {
    id: 1,
    title: 'Health Assistant',
    description: 'MERN platform connecting patients with healthcare services, appointment booking, telemedicine',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/projects/health-assistant.png',
    github: 'https://github.com/devbyshawon/health-assistant',
    demo: 'https://health-assistant-demo.vercel.app',
    status: 'live',
  },
  {
    id: 2,
    title: 'TaskFlow',
    description: 'Collaborative task management system with real-time updates and team features',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
    image: '/projects/taskflow.png',
    github: 'https://github.com/devbyshawon/taskflow',
    demo: 'https://taskflow-demo.vercel.app',
    status: 'live',
  },
  {
    id: 3,
    title: 'ShopFlow',
    description: 'Affordable POS + Inventory system for 50+ lakh Bangladeshi retail shops',
    tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
    image: '/projects/shopflow-mockup.png',
    github: 'https://github.com/devbyshawon/shopflow',
    demo: '#',
    status: 'coming-soon',
    launchDate: 'Sept 25, 2024',
  },
  {
    id: 4,
    title: 'Bangla Resume Parser',
    description: 'Fine-tuned LLM for parsing Bangla resumes, AI-powered job matching',
    tags: ['LLaMA 2', 'LoRA', 'FastAPI', 'HuggingFace'],
    image: '/projects/resume-parser-mockup.png',
    github: 'https://github.com/devbyshawon/bangla-resume-parser',
    demo: '#',
    status: 'coming-soon',
    launchDate: 'Oct 20, 2024',
  },
];

// Skills data
export const skills = {
  frontend: [
    { name: 'React', icon: 'Code' },
    { name: 'Vite', icon: 'Zap' },
    { name: 'Tailwind CSS', icon: 'Palette' },
    { name: 'Framer Motion', icon: 'Move' },
    { name: 'Next.js', icon: 'Package' },
  ],
  backend: [
    { name: 'Node.js', icon: 'Server' },
    { name: 'Express.js', icon: 'Link' },
    { name: 'MongoDB', icon: 'Database' },
    { name: 'Redis', icon: 'Zap' },
    { name: 'PostgreSQL', icon: 'Database' },
  ],
  aiml: [
    { name: 'Python', icon: 'Code' },
    { name: 'LLM Fine-tuning', icon: 'Brain' },
    { name: 'Transformers (HuggingFace)', icon: 'Cpu' },
    { name: 'LoRA', icon: 'Layers' },
    { name: 'FastAPI', icon: 'Zap' },
  ],
  devops: [
    { name: 'Docker', icon: 'Box' },
    { name: 'Vercel', icon: 'Cloud' },
    { name: 'Railway', icon: 'Truck' },
    { name: 'GitHub', icon: 'GitBranch' },
    { name: 'Git', icon: 'GitCommit' },
  ],
};

// Personal info
export const personalInfo = {
  name: 'Arham',
  fullName: 'MD. Shawon Hossain',
  title: 'Full-Stack MERN Developer & AI/ML Engineer',
  bio: 'Final-year CSE student at BRAC University (graduating Jan 2027). I build production-grade MERN systems that solve real-world problems. My focus: making technology accessible for Bangladesh\'s markets.',
  email: 'shawon12hossain@gmail.com',
  phone: '+8801410839304',
  github: 'https://github.com/devbyshawon',
  linkedin: 'https://linkedin.com/in/devbyshawon',
  twitter: 'https://twitter.com/devbyshawon',
  resume: '/resume.pdf', // Place resume in public folder
  location: 'Dhaka, Bangladesh',
};

// Navigation links
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

// Highlight cards for about section
export const highlights = [
  {
    title: '2+ Live Projects',
    description: 'Production-grade systems, not tutorials',
    icon: 'Code2',
  },
  {
    title: 'Full-Stack & AI/ML',
    description: 'Rare combination: I do both',
    icon: 'Brain',
  },
  {
    title: 'Bangladesh Focus',
    description: 'Building for local market needs',
    icon: 'Target',
  },
];