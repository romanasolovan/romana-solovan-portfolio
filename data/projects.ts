// src/data/projects.ts

/**
 * PROJECT TYPE DEFINITION
 * This defines the shape of each project object.
 * TypeScript will yell at you if you forget a required field!
 */
export type Project = {
  id: number; // Unique identifier for React keys
  title: string; // Project name
  description: string; // Short overview (1-2 sentences)

  // Technical details
  techStack: string[]; // Technologies used ["React", "Node.js"]

  // Links (optional because not all projects may have both)
  liveUrl?: string; // Live demo URL
  githubUrl?: string; // GitHub repository URL

  // Project metadata
  type: "team" | "personal"; // Restricts to only these two values
  role?: string; // Your role (optional for personal projects)

  // Visual
  image: string; // Path to project image in /public

  // Additional context
  highlights?: string[]; // Key achievements or features
  startDate?: string;
  endDate?: string;
  teamSize?: number;
  featured?: boolean;

  // Future fields you might add:
  // startDate?: string;
  // endDate?: string;
  // teamSize?: number;
  // featured?: boolean;
};

/**
 * PROJECT DATA ARRAY
 * Add new projects here. TypeScript will validate the structure.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Booksy – Book Catalog Web App",
    description:
      "Responsive web app to browse books, filter by category, and view details in modals.",
    techStack: ["HTML", "CSS", "JavaScript", "REST API"],
    liveUrl: "https://darkissdark.github.io/development-hell-02/",
    githubUrl: "https://github.com/romanasolovan/development-hell-02",
    type: "team",
    role: "Front-end Developer, Scrum Master",
    image: "/projects/booksy.jpg", // Place image in public/projects/
    highlights: [
      "Implemented dynamic pagination and category filtering",
      "Built accessible modal windows and keyboard navigation",
    ],
  },
  {
    id: 2,
    title: "NoteHub",
    description: "Simple note adding application for better productivity.",
    techStack: ["Next.js", "TypeScript", "CSS Modules"],
    liveUrl: "https://09-auth-pink.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/09-auth",
    type: "personal",
    image: "/projects/noteHub.jpg",
    highlights: [
      "Implemented smooth scroll animations",
      "Built custom image carousel",
    ],
  },
  {
    id: 3,
    title: "Tasteorama",
    description: "Recipe webpage for saving and creating recipes.",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Node.js"],
    liveUrl: "https://taste-of-the-end-f.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/taste-of-the-end-f",
    type: "team",
    image: "/projects/tasteorama.jpg",
    highlights: [
      "Implemented smooth scroll animations",
      "Built custom image carousel",
    ],
  },
  {
    id: 4,
    title: "Birdie - The Stroke",
    description: "Woman's pregnancy tracker made for a Ukrainian market.",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Node.js"],
    liveUrl: "https://birdie-kohl.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/birdie",
    type: "team",
    image: "/projects/birdieTheStroke.jpg",
    highlights: [
      "Implemented smooth scroll animations",
      "Built custom image carousel",
    ],
  },
  {
    id: 5,
    title: "Car World",
    description: "Car Rental application.",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Node.js"],
    liveUrl: "https://car-world-mu.vercel.app/",
    githubUrl: "https://github.com/romanasolovan/car-world",
    type: "personal",
    image: "/projects/carWorldHero.jpg",
    highlights: [
      "Implemented smooth scroll animations",
      "Built custom image carousel",
    ],
  },
  {
    id: 6,
    title: "WebStudio",
    description: "Effective solutions for businesses.",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Node.js"],
    liveUrl: "https://romanasolovan.github.io/goit-markup-hw-06/",
    githubUrl: "https://github.com/romanasolovan/goit-markup-hw-06",
    type: "personal",
    image: "/projects/webStudio.jpg",
    highlights: [
      "Implemented smooth scroll animations",
      "Built custom image carousel",
    ],
  },
  {
    id: 7,
    title: "Gallery",
    description: "Simple gallery webpage",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Node.js"],
    liveUrl: "https://romanasolovan.github.io/goit-js-hw-12/",
    githubUrl: "https://github.com/romanasolovan/goit-js-hw-12",
    type: "personal",
    image: "/projects/gallery.jpg",
    highlights: [
      "Implemented smooth scroll animations",
      "Built custom image carousel",
    ],
  },
  // Add more projects here...
];

/**
 * HELPER FUNCTIONS (optional but useful)
 */

// Get a single project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Filter projects by type
export const getProjectsByType = (type: "team" | "personal"): Project[] => {
  return projects.filter((project) => project.type === type);
};

// Get featured projects (you can add a 'featured' boolean later)
export const getFeaturedProjects = (limit?: number): Project[] => {
  const featured = projects.slice(0, limit || projects.length);
  return featured;
};
