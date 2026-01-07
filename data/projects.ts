export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: "team" | "personal";
  role?: string;
  image: string;
  highlights?: string[];
  startDate?: string;
  endDate?: string;
  teamSize?: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Car World — Car Rental Platform",
    description:
      "A modern car rental web application that allows users to browse, filter, and save vehicles for a smoother booking experience.",
    techStack: ["Next.js", "TypeScript", "CSS Modules"],
    liveUrl: "https://car-world-mu.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/car-world",
    type: "personal",
    role: "Front-End Developer",
    image: "/projects/carWorldHero.jpg",
    highlights: [
      "Implemented a favorites feature to improve user experience",
      "Built filtering and search functionality for the car catalog",
      "Created a booking form for customer inquiries",
      "Focused on clean UI, smooth transitions, and responsive design",
    ],
  },

  {
    id: 2,
    title: "Birdie — Pregnancy Tracking App",
    description:
      "A pregnancy tracking application designed for the Ukrainian market, focused on clarity, accessibility, and user comfort.",
    techStack: ["Next.js", "TypeScript", "CSS Modules"],
    liveUrl: "https://birdie-kohl.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/birdie",
    type: "team",
    teamSize: 10,
    role: "Front-End Developer, Scrum Master",
    image: "/projects/birdieTheStroke.jpg",
    highlights: [
      "Led sprint planning and task coordination as Scrum Master",
      "Implemented smooth scroll-based animations for better engagement",
      "Built a custom image carousel component",
      "Collaborated with designers and developers in a large team environment",
    ],
  },

  {
    id: 3,
    title: "Booksy — Book Catalog Web App",
    description:
      "A responsive web application for browsing books, filtering by category, and viewing detailed information in modal windows.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://darkissdark.github.io/development-hell-02/",
    githubUrl: "https://github.com/romanasolovan/development-hell-02",
    type: "team",
    teamSize: 12,
    role: "Front-End Developer, Scrum Master",
    image: "/projects/booksy.jpg",
    highlights: [
      "Implemented dynamic pagination and category-based filtering",
      "Built accessible modal windows with keyboard navigation",
      "Worked with REST API data and asynchronous requests",
      "Coordinated team workflow and task distribution",
    ],
  },

  {
    id: 4,
    title: "NoteHub — Note Management App",
    description:
      "A simple productivity app that allows users to create, store, and manage personal notes.",
    techStack: ["Next.js", "TypeScript", "CSS Modules"],
    liveUrl: "https://09-auth-pink.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/09-auth",
    type: "personal",
    role: "Front-End Developer",
    image: "/projects/noteHub.jpg",
    highlights: [
      "Built a clean and intuitive note creation interface",
      "Implemented authentication-based access to user data",
      "Focused on component structure and state management",
      "Ensured responsive layout across devices",
    ],
  },

  {
    id: 5,
    title: "Tasteorama — Recipe Browsing App",
    description:
      "A recipe browsing and management application for discovering, saving, and organizing cooking ideas.",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Node.js"],
    liveUrl: "https://taste-of-the-end-f.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/taste-of-the-end-f",
    type: "team",
    teamSize: 11,
    role: "Front-End Developer, Scrum Master",
    image: "/projects/tasteorama.jpg",
    highlights: [
      "Implemented recipe browsing and filtering functionality",
      "Built reusable UI components for recipe cards",
      "Coordinated team communication and sprint tasks",
      "Integrated front-end logic with backend services",
    ],
  },

  {
    id: 6,
    title: "WebStudio — HTML & CSS Fundamentals Project",
    description:
      "A static website built to practice semantic HTML, modern CSS, and responsive layout techniques.",
    techStack: ["HTML", "CSS"],
    liveUrl: "https://romanasolovan.github.io/goit-markup-hw-06/",
    githubUrl: "https://github.com/romanasolovan/goit-markup-hw-06",
    type: "personal",
    role: "Front-End Developer",
    image: "/projects/webStudio.jpg",
    highlights: [
      "Applied semantic HTML structure and accessibility basics",
      "Implemented responsive layouts using Flexbox and media queries",
      "Focused on clean, maintainable CSS architecture",
      "Practiced cross-browser compatibility",
    ],
  },

  {
    id: 7,
    title: "Gallery — JavaScript Image Gallery",
    description:
      "A lightweight image gallery built as part of a JavaScript course project.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://romanasolovan.github.io/goit-js-hw-12/",
    githubUrl: "https://github.com/romanasolovan/goit-js-hw-12",
    type: "personal",
    role: "Front-End Developer",
    image: "/projects/gallery.jpg",
    highlights: [
      "Worked with JavaScript events and DOM manipulation",
      "Implemented dynamic image rendering",
      "Focused on clean logic and readable code structure",
      "Practiced responsive layout fundamentals",
    ],
  },
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Filter projects by type
export const getProjectsByType = (type: "team" | "personal"): Project[] => {
  return projects.filter((project) => project.type === type);
};

// Get featured projects
export const getFeaturedProjects = (limit?: number): Project[] => {
  const featured = projects.slice(0, limit || projects.length);
  return featured;
};
