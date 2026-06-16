// import profileImg from "@/assets/profile.jpg";
import researchpal from "../assets/research-pal.png";
// import reclaim from "@/assets/project-reclaim.jpg";
import inform from "../assets/inform.png";
import curbiq from "../assets/curbiq.png";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image?: string;
  stack: string[];
  features: string[];
  role: string;
  year: string;
  links: { demo?: string; github?: string; caseStudy?: string };
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  relationship?: string;
  quote: string;
  avatar?: string;
  date: string;
};

export type Portfolio = {
  username: string;
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar?: string;
  location: string;
  timezone: string;
  email: string;
  primaryColor: string;
  stats: { label: string; value: string }[];
  socials: { label: string; url: string }[];
  experience: ExperienceItem[];
  projects: Project[];
  skills: SkillGroup[];
  testimonials: Testimonial[];
};

const portfolios: Portfolio[] = [
  {
    username: "ranjith",
    name: "Ranjith Neelipally",
    title: "Full Stack Developer",
    tagline:
      "Building enterprise web and mobile applications with React, React Native and Node.js.",
    bio: "Full Stack Developer with 3+ years of experience building enterprise web and mobile applications. Experienced in React, React Native, TypeScript, Node.js and MongoDB. Passionate about creating intuitive user experiences, scalable systems and products that solve real-world problems.",
    // avatar: profileImg,
    location: "Hyderabad, India",
    timezone: "IST (UTC+5:30)",
    email: "ranjithkumarneelipalli@gmail.com",
    primaryColor: "#CCCB75",
    stats: [
      { label: "Years experience", value: "3+" },
      { label: "Projects delivered", value: "15+" },
      { label: "Enterprise products", value: "4+" },
    ],
    socials: [
      { label: "GitHub", url: "https://github.com/yourusername" },
      { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
      {
        label: "Email",
        url: "mailto:ranjithkumarneelipalli@gmail.com",
      },
    ],
    experience: [
      {
        id: "arcadis",
        company: "Arcadis IBI Group",
        role: "Junior Software Developer",
        period: "2022 — 2025",
        location: "Hyderabad, India",
        summary:
          "Contributed to enterprise asset management and infrastructure platforms used by engineering teams across North America.",
        highlights: [
          "Developed reusable React components integrated with the Novus design system and Storybook.",
          "Built project creation, file management and threaded comment features used across enterprise applications.",
          "Contributed to React Native mobile applications including map-based asset search and filtering experiences.",
        ],
        stack: ["React", "React Native", "TypeScript", "Redux", "Storybook"],
      },
    ],
    projects: [
      {
        id: "inform",
        name: "Inform",
        tagline: "Enterprise Asset Management Platform",
        description:
          "Enterprise asset management platform used by infrastructure and engineering organizations.",
        longDescription:
          "Worked on multiple modules within Inform, including project creation workflows, file management, responsive UI improvements and reusable component development. Contributed to both web and mobile experiences used by infrastructure management teams.",
        image: inform,
        stack: ["React", "TypeScript", "Redux", "Storybook"],
        features: [
          "Project creation workflows",
          "File management",
          "Responsive UI",
          "Reusable components",
        ],
        role: "Frontend Developer",
        year: "2024",
        links: { demo: "#", caseStudy: "#" },
      },
      {
        id: "curbiq",
        name: "Curbiq",
        tagline: "Parking Operations Management Platform",
        description:
          "Enterprise platform for managing parking regulations, operational workflows and accessibility requirements.",
        longDescription:
          "Contributed to parking regulation management features, accessibility improvements, multilingual support and operational workflows used by parking operators.",
        image: curbiq,
        stack: ["React", "TypeScript", "Redux"],
        features: [
          "Parking regulations",
          "Accessibility improvements",
          "Multi-language support",
          "Operational workflows",
        ],
        role: "Frontend Developer",
        year: "2023",
        links: { demo: "#", github: "#", caseStudy: "#" },
      },

      {
        id: "researchpal",
        name: "ResearchPal",
        tagline: "Agricultural Research Management Platform",
        description:
          "Offline-first research management platform for agricultural field experiments.",
        longDescription:
          "ResearchPal helps agricultural researchers manage projects, replications, treatments, plot-level observations and research notes. The platform supports offline workflows, structured field data collection and cross-platform access through web and mobile applications.",
        image: researchpal,
        stack: [
          "React",
          "React Native",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
        ],
        features: [
          "Replication × Treatment layouts",
          "Offline-first workflow",
          "Plot-level notes",
          "Project management",
        ],
        role: "Founder & Full Stack Developer",
        year: "2025",
        links: {
          demo: "https://www.research-pal.com",
          github: "#",
          caseStudy: "#",
        },
      },
      {
        id: "reclaim",
        name: "ReClaim",
        tagline: "Habit Recovery & Wellness Tracker",
        description:
          "Offline-first habit recovery and wellness tracking application.",
        longDescription:
          "ReClaim is a privacy-focused mobile application designed to help users recover from unhealthy habits and build sustainable routines. The app tracks recovery progress, visualizes health improvements and works completely offline.",
        // image: reclaim,
        stack: ["React Native", "Expo", "TypeScript"],
        features: [
          "Recovery tracking",
          "Health insights",
          "Offline-first",
          "Custom habits",
        ],
        role: "Product Creator",
        year: "2026",
        links: { demo: "#", github: "#" },
      },
    ],
    skills: [
      {
        category: "Frontend",
        items: [
          "React",
          "React Native",
          "TypeScript",
          "Redux",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "REST APIs"],
      },
      {
        category: "Tools",
        items: ["Git", "Storybook", "Figma", "Jira", "Postman"],
      },
    ],
    testimonials: [],
  },
];

export function getPortfolio(username: string): Portfolio | undefined {
  return portfolios.find((p) => p.username === username);
}

export function listPortfolios(): Portfolio[] {
  return portfolios;
}
