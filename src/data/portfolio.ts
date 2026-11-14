export type Project = {
  id: number;
  title: string;
  description: string;
  /** One-line outcome or metric shown on the card. */
  highlight?: string;
  /** Shown first, with a wider card. */
  featured?: boolean;
  image: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  date: string;
  highlights: string[];
  tech: string[];
};

export type Achievement = {
  id: number;
  title: string;
  date?: string;
  description: string;
  credentialUrl?: string;
};

export type FocusArea = {
  icon: "pipeline" | "chart" | "web";
  title: string;
  description: string;
};

export const portfolioData = {
  personal: {
    name: "Lokeswar",
    shortName: "Lokeswar",
    role: "Data Engineer",
    rotatingRoles: ["Data Engineer", "PySpark & SQL", "Power BI Dashboards", "Full-Stack Builder"],
    tagline: "Building reliable data pipelines that turn raw data into decisions.",
    bio: [
      "I'm a data engineer at Infosys, working with Python, PySpark and SQL to build pipelines that move, clean and shape data reliably at scale.",
      "Before that I built full-stack features with React and Node.js, so I care about the whole path, from raw data landing in a table to the dashboard or app where someone finally uses it. I like clean, well-tested code and systems that are easy to reason about.",
    ],
    email: "lokeswar5656@gmail.com",
    location: "Hyderabad, India",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.jpg",
    github: "https://github.com/lokeswar777",
    linkedin: "https://linkedin.com/in/lokeswar777",
    leetcode: "https://leetcode.com/u/lokeswar777/",
  },
  // TODO: update these numbers as they change.
  stats: [
    { value: "500+", label: "LeetCode problems" },
    { value: "2", label: "Industry roles" },
    { value: "2", label: "Certifications" },
  ],
  focusAreas: [
    {
      icon: "pipeline",
      title: "Data Pipelines",
      description: "ETL with PySpark and SQL that is reliable, testable and easy to monitor.",
    },
    {
      icon: "chart",
      title: "Analytics & BI",
      description: "Turning clean data into Power BI dashboards that people actually use.",
    },
    {
      icon: "web",
      title: "Web Apps",
      description: "Full-stack apps with React, Next.js and Node.js when data needs a front door.",
    },
  ] satisfies FocusArea[],
  skills: {
    Languages: ["Python", "SQL", "Java", "JavaScript", "TypeScript"],
    "Data & Analytics": ["PySpark", "Power BI"],
    Databases: ["PostgreSQL", "MongoDB", "Supabase", "Prisma ORM"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
    Backend: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"],
    "Tools & DevOps": ["Git", "GitHub Actions", "Vercel", "VS Code"],
  } as Record<string, string[]>,
  experience: [
    {
      id: 1,
      role: "Systems Engineer (Data Engineering)",
      company: "Infosys",
      date: "May 2026 - Present",
      // TODO: replace with concrete work, e.g. "Built PySpark jobs processing X GB/day, cutting runtime by Y%".
      highlights: ["Working as a Data Engineer on enterprise data platforms."],
      // TODO: list the tools you use day to day.
      tech: [],
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Datavalley",
      date: "Aug 2025 - Oct 2025",
      highlights: [
        "Developed and maintained full-stack features using React and Node.js.",
        "Integrated third-party machine learning APIs into the core product.",
      ],
      tech: ["React", "Node.js"],
    },
  ] satisfies Experience[] as Experience[],
  projects: [
    // TODO: these first two are template projects with placeholder images and no real links.
    // Replace them with your own work (ideally a data project such as a PySpark ETL
    // pipeline or a Power BI dashboard) or delete them.
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A high-performance modern e-commerce platform built with Next.js, Stripe for payments, and a custom headless CMS.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    },
    {
      id: 2,
      title: "Real-time Chat App",
      description: "A WebSocket-based real-time chat application with channels, direct messaging, and rich media sharing capabilities.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tech: ["Next.js", "Socket.io", "Redis", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Money Tracker App",
      description: "A personal finance management app that helps users track their expenses, set budgets, and visualize spending habits.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      tech: ["HTML", "JavaScript", "Supabase (SQL)"],
      githubUrl: "https://github.com/lokeswar777/money",
      featured: true,
    },
  ] satisfies Project[] as Project[],
  // TODO: double-check these claims and add credentialUrl links so recruiters can verify them.
  achievements: [
    {
      id: 1,
      title: "Google Cloud Certified",
      date: "2023",
      description: "Achieved Google Cloud Certified - Professional Cloud Architect certification, demonstrating expertise in designing and managing scalable cloud solutions.",
    },
    {
      id: 2,
      title: "Certified Python from HackerRank",
      date: "2022",
      description: "Earned the Certified Python Programmer certification from HackerRank, showcasing proficiency in Python programming and problem-solving skills.",
    },
    {
      id: 3,
      title: "Solved 500 LeetCode Problems",
      description: "Solved over 500 coding problems on LeetCode, covering a wide range of algorithms and data structures, and consistently ranked in the top 5% of users globally.",
      credentialUrl: "https://leetcode.com/u/lokeswar777/",
    },
  ] satisfies Achievement[] as Achievement[],
};
