export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  visualType: "recruitment" | "booking" | "traceability" | "career" | "hospital";
  status?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  description: string;
  technologies: string[];
  visualLabel: string;
  visualSnippet: string;
  certificateImage?: string;
}

export interface SkillCategory {
  title: string;
  items: { name: string; icon?: string }[];
}

export interface CertificationItem {
  id?: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export type CertificateItem = CertificationItem;

export interface AchievementItem {
  title: string;
  event: string;
  project: string;
  highlight: string;
  description?: string;
  badge?: string;
  category?: string;
  year?: string;
  subtitle?: string;
}

export type Project = FeaturedProject;

export const portfolioData = {
  personal: {
    name: "Pradeepkumar R",
    primaryTitle: "Software Developer",
    secondaryTitle: "Full Stack Developer · AI Product Builder",
    location: "Coimbatore, Tamil Nadu, India",
    email: "Pradeeprajamanickam1234@gmail.com",
    github: "https://github.com/Pradeepk0606",
    linkedin: "https://www.linkedin.com/in/pradeepkumar--r/",
    heroPositioning: "Building thoughtful software. Turning complex ideas into useful products.",
    eyebrow: "SOFTWARE DEVELOPER · FULL STACK · PRODUCT BUILDER",
    headlineStart: "I turn ambitious ideas into ",
    headlineHighlight: "useful software.",
    supportingText:
      "I'm a Computer Science Engineering student focused on full-stack development, APIs, databases, AI integrations, and practical applications.",
    status: "Open to Software Development Opportunities",
    profileImage: "/profile.jpg",
    resumeUrl: "/resume",
    education: {
      degree: "B.E. Computer Science & Engineering",
      institution: "SNS College of Engineering",
      university: "Anna University",
      location: "Coimbatore, India",
      period: "2023 – 2027",
      cgpa: "8.57",
      hsc: "81.83%",
      sslc: "73.2%"
    },
    educationDetails: {
      degree: "B.E. Computer Science & Engineering",
      institution: "SNS College of Engineering",
      university: "Anna University",
      location: "Coimbatore, India",
      period: "2023 – 2027",
      cgpa: "8.57",
      hsc: "81.83%",
      sslc: "73.2%"
    },
    aboutNarrative: [
      "I'm a builder at heart. I enjoy taking a problem from a rough idea to a working product that people can actually use.",
      "Across five technical internships, I have worked with full-stack web applications, REST APIs, databases, Python automation, and AI integrations.",
      "I keep expanding my engineering foundation while paying attention to the details that make software useful: clarity, reliability, accessibility, and thoughtful user experience."
    ],
    languages: ["Tamil", "English"],
    philosophy: "Optimism turns weaknesses into strengths, and persistence turns ideas into reality.",
    interests: [
      "Solving Rubik's Cubes and puzzles",
      "Exploring new technologies and electronics hardware",
      "Competitive coding and hackathons",
      "Traveling and learning about cultures",
      "Reading about entrepreneurship and leadership"
    ]
  },

  recruiterSnapshot: [
    {
      number: "01",
      title: "Full Stack Development",
      description: "Hands-on engineering across React frontends, Node.js/Express backends, RESTful APIs, and database architectures."
    },
    {
      number: "02",
      title: "Multiple Internship Experiences",
      description: "Real-world engineering workflows, team collaboration, code reviews, and production features across 5 internships."
    },
    {
      number: "03",
      title: "Real-world Applications",
      description: "Project work across healthcare workflows, traceability, recruitment systems, and career guidance."
    },
    {
      number: "04",
      title: "Computer Science Engineering",
      description: "Strong academic grounding in Data Structures, Algorithms, OOP, Database Systems, and computer networks."
    }
  ],

  experiences: [
    {
      id: "gonex",
      company: "GO NEX INNOVATIONS",
      role: "Full Stack Developer Intern",
      period: "2026",
      year: "2026",
      description:
        "Worked on company web applications using the MERN stack, REST APIs, MongoDB, responsive UI development, third-party integrations, Agile workflows, code reviews, and technical documentation.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      visualLabel: "Production Web Applications & API Workflows",
      visualSnippet: "MERN Stack · MongoDB Collections · Agile CI/CD"
    },
    {
      id: "mindfulai",
      company: "MINDFULAI",
      role: "Full Stack Developer Intern",
      period: "2025",
      year: "2025",
      description:
        "Worked on an AI-integrated full-stack application involving authentication, appointment scheduling, responsive dashboards, REST APIs, and third-party AI services.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI APIs"],
      visualLabel: "AI-Integrated Dashboard & Appointment Scheduling",
      visualSnippet: "Authentication · Scheduling · AI service integration",
      certificateImage: "/projects/Internship Certificate/Mindfull Ai.png"
    },
    {
      id: "thiranex",
      company: "THIRANEX",
      role: "Full Stack Developer Intern",
      period: "2025",
      year: "2025",
      description:
        "Worked on React frontend development, Node.js/Express backend development, REST APIs, debugging, performance optimization, and deployment.",
      technologies: ["React", "Node.js", "Express.js", "REST APIs"],
      visualLabel: "Component Engineering & Backend Optimization",
      visualSnippet: "Reusable components · REST APIs · Debugging"
    },
    {
      id: "innovate-intern",
      company: "INNOVATE INTERN",
      role: "Python Developer Intern",
      period: "2024",
      year: "2024",
      description:
        "Worked on Python automation applications, SQL databases, API integration, backend workflows, OOP, and code optimization.",
      technologies: ["Python", "SQL", "APIs", "OOP"],
      visualLabel: "Python Automated Pipelines & Database Engine",
      visualSnippet: "Data Normalization · Background Tasks · SQL Queries",
      certificateImage: "/projects/Internship Certificate/Innovate Intern Internship.jpg"
    },
    {
      id: "internpe",
      company: "INTERNPE",
      role: "Python Developer Intern",
      period: "2024",
      year: "2024",
      description:
        "Worked on a Python-based competency scoring application involving Python, SQL, APIs, and automated reports.",
      technologies: ["Python", "SQL", "APIs"],
      visualLabel: "Competency Scoring Engine & Analytics",
      visualSnippet: "Analytical Scoring · Structured Output Reporting",
      certificateImage: "/projects/Internship Certificate/Internpe Internship.png"
    }
  ] as ExperienceItem[],

  featuredProjects: [
    {
      id: "aegis-recruit",
      number: "01",
      title: "AEGIS RECRUIT",
      category: "AI Recruitment CRM · ATS",
      tagline: "A structured, human-governed hiring journey powered by AI-assisted evaluation.",
      description:
        "An AI-enabled recruitment platform concept and MVP in development, designed around company, interviewer, and candidate workflows. The product organizes hiring into aptitude, coding, AI-assisted technical interview, and final human HR stages.",
      status: "MVP IN DEVELOPMENT",
      features: [
        "Company, interviewer, and candidate workspaces",
        "Resume analysis and candidate–role matching",
        "AI-assisted aptitude assessment generation",
        "Coding rounds with hidden-test evaluation workflows",
        "AI-supported technical interview and evaluation summaries",
        "Human HR panel as the final decision stage"
      ],
      technologies: ["Next.js", "TypeScript", "React", "MongoDB", "Gemini API"],
      image: "/projects/aegis-recruit-preview.svg",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "recruitment"
    },
    {
      id: "bookit-now",
      number: "02",
      title: "BOOKIT NOW",
      category: "Appointment Booking Platform",
      tagline: "End-to-end appointment management with dual user and administrative workflows.",
      description:
        "A full-stack appointment booking application where users can manage appointments and administrators can review, approve, or reject appointment requests.",
      features: [
        "Authentication",
        "Appointment booking",
        "Appointment history",
        "Admin dashboard",
        "Approval / rejection workflow",
        "Responsive UI"
      ],
      technologies: ["React", "JavaScript", "Firebase", "MERN"],
      image: "/projects/bookit-now-cover.svg",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "booking"
    },
    {
      id: "ayurchaintrace",
      number: "03",
      title: "AYURCHAINTRACE",
      category: "Herb Traceability Platform",
      tagline: "Supply chain verification pipeline from harvest origin to consumer verification.",
      description:
        "A digital platform focused on improving the traceability and transparency of Ayurvedic herbs across the supply chain.",
      features: [
        "Herb traceability",
        "Geo-tagging",
        "QR authentication",
        "Multi-role dashboards",
        "Digital provenance",
        "Quality analytics"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AI", "Blockchain"],
      image: "/projects/Ayurchain trace.png",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "traceability"
    },
    {
      id: "pathwise",
      number: "04",
      title: "PATHWISE",
      category: "AI Career Guidance Platform",
      tagline: "Automated student assessment and intelligent roadmap counseling platform.",
      description:
        "A career guidance platform designed to help students explore career paths and receive personalized guidance.",
      features: [
        "Career recommendations",
        "SWOT analysis",
        "AI career counselling",
        "Automated guidance workflows"
      ],
      technologies: ["AI", "Python", "Web Technologies"],
      image: "/projects/Career Guidance.png",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "career"
    },
    {
      id: "mac-portal",
      number: "05",
      title: "MAC PORTAL",
      category: "Smart Hospital Management System",
      tagline: "Operational intelligence platform for emergency triage, bed allocations, and queues.",
      description:
        "A hospital management platform designed to support hospital operations and improve workflow management.",
      features: [
        "Patient inflow forecasting",
        "Bed allocation",
        "Doctor scheduling",
        "Ambulance allocation",
        "Queue management",
        "Analytics dashboard"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Python"],
      image: "/projects/MAC portal.jpg",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "hospital"
    }
  ] as FeaturedProject[],

  moreProjects: [
    {
      title: "Gonex Company Website",
      category: "Corporate Web Portal",
      description: "Modern high-performance corporate platform with dynamic service catalogs and client lead capture.",
      technologies: ["React", "Node.js", "Tailwind / CSS", "REST APIs"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Gonex Digitals Website",
      category: "Digital Agency Platform",
      description: "Interactive portfolio and service showcase platform with refined responsive layout and performance.",
      technologies: ["React", "JavaScript", "Modern CSS"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "LitLingua",
      category: "Language Learning Application",
      description: "Interactive language training portal featuring vocabulary modules, audio cues, and contextual drills.",
      technologies: ["JavaScript", "React", "Web Speech API"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Language Portal",
      category: "Multilingual Assessment Engine",
      description: "Linguistic learning platform tailored for multilingual skill evaluations and real-time comprehension scoring.",
      technologies: ["React", "Node.js", "Express", "REST APIs"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Smart Competency Diagnostic & Candidate Profile Score Calculator",
      category: "Python / Candidate Evaluation",
      description: "Python prototype for structured competency inputs, candidate profile scoring, and automated reporting.",
      technologies: ["Python", "SQL", "Scikit-Learn", "Pandas"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Land Price Prediction System",
      category: "Predictive Real Estate Analytics",
      description: "Machine learning regression model estimating real estate property valuations from multi-parameter regional inputs.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Flask"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Solar Panel Positioning System",
      category: "Hardware / Embedded Tracking",
      description: "Arduino UNO dual-axis solar tracker optimizing photovoltaic panel angle for peak daytime irradiance.",
      technologies: ["Arduino C++", "LDR Sensors", "Servo Motors", "Embedded Systems"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Mini e-Sevai",
      category: "Civic Services Portal",
      description: "Streamlined public utility and government documentation assistance portal designed for high accessibility.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Forms Automation"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Edutech Timesup",
      category: "Academic Productivity Timer",
      description: "Focused study interval application with task tracking, time allocation statistics, and distraction safeguards.",
      technologies: ["React", "LocalStorage", "Modern CSS"],
      githubUrl: "https://github.com/Pradeepk0606"
    }
  ] as ProjectItem[],

  skills: [
    {
      title: "PRIMARY",
      items: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "C" }
      ]
    },
    {
      title: "FRONTEND",
      items: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React.js" }
      ]
    },
    {
      title: "BACKEND",
      items: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" }
      ]
    },
    {
      title: "DATABASE",
      items: [
        { name: "MongoDB" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Firebase" }
      ]
    },
    {
      title: "TOOLS",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Docker" },
        { name: "Figma" }
      ]
    },
    {
      title: "AI",
      items: [
        { name: "OpenAI APIs" },
        { name: "Claude" },
        { name: "LangChain" },
        { name: "Hugging Face" },
        { name: "Prompt Engineering" },
        { name: "AI Workflow Automation" }
      ]
    }
  ],

  currentlyImproving: [
    "Python & Java DSA",
    "Full Stack Development",
    "MySQL & Database Design",
    "Docker & Cloud Fundamentals",
    "n8n & Workflow Automation",
    "System Design Foundations"
  ],

  currentlyBuilding: [
    "Aegis Recruit · MVP in development",
    "PRD Portfolio 2.0 · Interactive 3D experience"
  ],

  certifications: [
    { id: "ibm-design-thinking", title: "Enterprise Design Thinking Practitioner", issuer: "IBM", year: "2024", image: "/projects/Enterprise_Design_Thinking_Practitioner_Badge.jpg" },
    { id: "nptel-cloud", title: "Cloud Computing", issuer: "NPTEL", year: "2024" },
    { id: "guvi-mern", title: "MERN Stack Development", issuer: "GUVI Geek Networks", year: "2024", image: "/projects/GuviCertification - MERN Stack.png" },
    { id: "prepin-python", title: "Python Programming", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/Python.jpg" },
    { id: "prepin-java", title: "Java Programming", issuer: "PrepInsta", year: "2024" },
    { id: "sns-prompt-product", title: "Prompt to Product AI Workshop", issuer: "SNS Groups", year: "2024" },
    { id: "gl-uiux", title: "UI/UX for Beginners", issuer: "Great Learning", year: "", image: "/projects/UiUx certificate.jpg" },
    { id: "forage-accenture-data", title: "Data Analytics and Visualization Job Simulation", issuer: "Forage · Accenture", year: "2024", image: "/projects/Forage/Data Analytics and Visualization job.jpg" },
    { id: "forage-jpmorgan-se", title: "Software Engineering Job Simulation", issuer: "Forage · JPMorgan Chase & Co.", year: "2024", image: "/projects/Forage/Software Engineering job Simulation.jpg" },
    { id: "forage-accenture-devtech", title: "Developer and Technology Job Simulation", issuer: "Forage · Accenture", year: "2024", image: "/projects/Forage/Developer and Technology job Simulation.jpg" },
    { id: "forage-cognizant-agile", title: "Agile Methodology Job Simulation", issuer: "Forage · Cognizant", year: "2024", image: "/projects/Forage/Agile Methodology.jpg" },
    { id: "forage-walmart-advanced", title: "Advanced Software Engineering Job Simulation", issuer: "Forage · Walmart Global Tech", year: "2024", image: "/projects/Forage/Advanced Software Engineering Job Simulation.jpg" },
    { id: "prepin-git", title: "Git Course", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/Git.jpg" },
    { id: "prepin-react", title: "React Course", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/certificate_React_625743.png" },
    { id: "prepin-dsa-c", title: "Data Structures and Algorithms in C", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/DSA in C.jpg" },
    { id: "prepin-statistics", title: "Statistics Course", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/Statistics.jpg" },
    { id: "prepin-css", title: "CSS Course", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/CSS.jpg" },
    { id: "prepin-basic-coding", title: "Basic Coding Courses", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/Basic Coding Courses.jpg" },
    { id: "prepin-html", title: "HTML Course", issuer: "PrepInsta", year: "2024", image: "/projects/Prepinsta/Html.jpg" },
  ] as CertificationItem[],

  achievements: [
    {
      title: "Hackfest Intra-College Winner",
      event: "SNS Hackfest",
      project: "MAC Portal",
      highlight: "Awarded 1st place for architecting an emergency triage & smart hospital management system.",
      description: "Awarded 1st place for architecting an emergency triage & smart hospital management system.",
      badge: "1st Place",
      category: "Competition",
      year: "2024"
    },
    {
      title: "Arduino UNO Bootcamp Winner",
      event: "Hardware Innovation Bootcamp",
      project: "Solar Panel Positioning System",
      highlight: "Designed real-time dual-axis solar irradiance tracking mechanism using embedded sensors.",
      description: "Designed real-time dual-axis solar irradiance tracking mechanism using embedded sensors.",
      badge: "Winner",
      category: "Technical Events",
      year: "2024"
    },
    {
      title: "Generative AI Bootcamp Winner",
      event: "Generative AI Bootcamp",
      project: "Generative AI Bootcamp",
      highlight: "Recognised as a bootcamp winner.",
      description: "Recognised as a winner at the Generative AI bootcamp.",
      badge: "Winner",
      category: "Industry Readiness",
      year: "2024"
    },
  ] as AchievementItem[],

  journey: [
    {
      year: "2026",
      badge: "Internship",
      title: "Full Stack Developer Intern · Go Nex Innovations",
      subtitle: "MERN applications & API workflows",
      description: "Worked on company web applications, MongoDB, responsive interfaces, integrations, Agile workflows, code reviews, and documentation."
    },
    {
      year: "2025",
      badge: "Internships",
      title: "Full Stack Developer Intern · MindfulAI & Thiranex",
      subtitle: "Frontend, backend & AI integrations",
      description: "Worked with React, Node.js, Express, REST APIs, authentication, scheduling, dashboards, debugging, and AI service integration."
    },
    {
      year: "2024",
      badge: "Internships & Awards",
      title: "Python Intern · Innovate Intern & InternPe",
      subtitle: "Python automation, SQL & project work",
      description: "Worked on Python automation and competency-scoring workflows, and received recognition at SNS Hackfest and technical bootcamps."
    },
    {
      year: "2023",
      badge: "Academics",
      title: "Started B.E. in Computer Science & Engineering",
      subtitle: "SNS College of Engineering · Class of 2027",
      description: "Began undergraduate study in Computer Science and Engineering, building foundations in programming and software development."
    }
  ],

  softSkills: [
    "Analytical Problem Solving",
    "Continuous Learning & Adaptation",
    "Collaborative Team Mindset",
    "Technical Documentation",
    "System Design & Ownership",
    "Effective Communication"
  ],

  currentlyLearning: [
    { title: "Advanced Python & Algorithmic Patterns", stage: "Active", focus: "Data Structures, Dynamic Programming & Complexity" },
    { title: "Docker & Containerization", stage: "In Progress", focus: "Multi-stage builds, isolated environments & deployment" },
    { title: "Distributed System Patterns", stage: "Exploration", focus: "API Gateway architectures, Redis caching & message queues" }
  ],

  whatIBring: [
    { title: "Rapid Execution & Adaptability", description: "Quickly grasp modern tech stacks and ship working, authenticated features with minimal friction." },
    { title: "Production Hygiene", description: "Strict typing with TypeScript, responsive UI layouts, clean API endpoints, and clean git commits." },
    { title: "Hunger to Learn", description: "High technical curiosity and relentless drive to improve system performance and software craftsmanship." }
  ],

  beyondCode: [
    { icon: "♟️", title: "Chess & Strategy Games", description: "Analyzing tactical patterns and endgame foresight that directly inform algorithmic thinking." },
    { icon: "🛠️", title: "Hardware Prototyping", description: "Tinkering with microcontrollers, Arduino circuits, and sensor-driven automation projects." },
    { icon: "📚", title: "Tech Reading & Architecture", description: "Exploring engineering blogs, system design case studies, and open-source ecosystems." }
  ]
};
