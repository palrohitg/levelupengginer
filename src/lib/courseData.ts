export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  description: string;
  overview: string;
  icon: string;
  highlights: string[];
  modules: CourseModule[];
}

export const courses: Course[] = [
  {
    slug: "interview-prep",
    title: "Interview Prep Course – DSA + System Design",
    shortTitle: "Interview Prep",
    duration: "3 Months",
    description: "Master Data Structures, Algorithms & System Design to crack interviews at top product-based companies.",
    overview: "An intensive 3-month program designed to transform your problem-solving skills and prepare you for technical interviews at FAANG and top product-based companies. Includes 1:1 mentorship, mock interviews, resume review, and referrals.",
    icon: "Code",
    highlights: [
      "1:1 Mentorship from FAANG engineers",
      "200+ DSA problems with detailed solutions",
      "System Design fundamentals & case studies",
      "Mock interviews with real interviewers",
      "Resume review & optimization",
      "Referrals to top companies",
    ],
    modules: [
      {
        title: "Foundation – Arrays, Strings & Math",
        topics: ["Arrays & Hashing", "Two Pointers", "Sliding Window", "String Manipulation", "Bit Manipulation"],
      },
      {
        title: "Core DSA – Trees, Graphs & DP",
        topics: ["Binary Trees & BST", "Graphs – BFS/DFS", "Dynamic Programming", "Backtracking", "Greedy Algorithms"],
      },
      {
        title: "Advanced – System Design & Mock Interviews",
        topics: ["System Design Fundamentals", "Designing Scalable Systems", "Database Design", "Caching & Load Balancing", "Mock Interview Rounds"],
      },
    ],
  },
  {
    slug: "backend-engineering",
    title: "Backend Engineering Program",
    shortTitle: "Backend Engineering",
    duration: "6 Months",
    description: "Build production-grade backend systems with microservices, databases, and scalable architecture.",
    overview: "A comprehensive 6-month program that takes you from backend fundamentals to building production-ready systems. Learn from engineers at top companies and gain hands-on experience with real-world projects.",
    icon: "Server",
    highlights: [
      "1:1 Mentorship from senior backend engineers",
      "Build production-grade projects",
      "Microservices architecture patterns",
      "Database design & optimization",
      "Resume review & referrals",
      "API design best practices",
    ],
    modules: [
      {
        title: "Foundation – Languages & Frameworks",
        topics: ["Java/Python/Node.js deep dive", "Spring Boot / Express / Django", "REST API Design", "Authentication & Authorization", "Testing strategies"],
      },
      {
        title: "Databases & Storage",
        topics: ["SQL – PostgreSQL/MySQL", "NoSQL – MongoDB/Redis", "Database indexing & optimization", "Data modeling", "Message queues – Kafka/RabbitMQ"],
      },
      {
        title: "Microservices & DevOps",
        topics: ["Microservices patterns", "Docker & containerization", "CI/CD pipelines", "Cloud deployment (AWS/GCP)", "Monitoring & logging"],
      },
      {
        title: "System Design & Scalability",
        topics: ["High-level system design", "Caching strategies", "Load balancing", "Rate limiting", "Capstone project"],
      },
    ],
  },
  {
    slug: "devops-sre",
    title: "DevOps + SRE Engineering Program",
    shortTitle: "DevOps + SRE",
    duration: "6 Months",
    description: "Master DevOps practices, cloud infrastructure, and Site Reliability Engineering for modern tech companies.",
    overview: "A 6-month hands-on program covering everything from Linux fundamentals to advanced Kubernetes, CI/CD, and SRE practices. Build the skills to manage infrastructure at scale for top tech companies.",
    icon: "Cloud",
    highlights: [
      "1:1 Mentorship from DevOps/SRE leads",
      "Hands-on cloud projects (AWS/GCP/Azure)",
      "Kubernetes & container orchestration",
      "CI/CD pipeline design",
      "Incident management & SRE practices",
      "Resume review & referrals",
    ],
    modules: [
      {
        title: "Foundation – Linux & Networking",
        topics: ["Linux administration", "Shell scripting & automation", "Networking fundamentals", "DNS, HTTP, TCP/IP", "Security basics"],
      },
      {
        title: "Cloud & Infrastructure",
        topics: ["AWS/GCP core services", "Infrastructure as Code (Terraform)", "Configuration management (Ansible)", "Cloud networking & VPC", "Cost optimization"],
      },
      {
        title: "Containers & Orchestration",
        topics: ["Docker deep dive", "Kubernetes architecture", "Helm charts", "Service mesh (Istio)", "Container security"],
      },
      {
        title: "SRE Practices & Observability",
        topics: ["SLIs, SLOs, SLAs", "Monitoring (Prometheus/Grafana)", "Logging (ELK stack)", "Incident management", "Chaos engineering"],
      },
    ],
  },
  {
    slug: "full-stack",
    title: "Full Stack Engineering Program",
    shortTitle: "Full Stack Engineering",
    duration: "6 Months",
    description: "Become a complete full stack engineer with modern frontend, backend, and deployment skills.",
    overview: "A comprehensive 6-month program that covers the entire web development stack – from pixel-perfect frontends to scalable backends and cloud deployment. Graduate ready to build and ship production applications.",
    icon: "Layers",
    highlights: [
      "1:1 Mentorship from full stack leads",
      "Build 3+ production-ready projects",
      "Modern React & Next.js",
      "Backend with Node.js & databases",
      "Resume review & referrals",
      "Deployment & DevOps basics",
    ],
    modules: [
      {
        title: "Frontend Fundamentals",
        topics: ["HTML5, CSS3, JavaScript (ES6+)", "TypeScript fundamentals", "React.js deep dive", "State management (Redux/Zustand)", "Responsive design & accessibility"],
      },
      {
        title: "Advanced Frontend",
        topics: ["Next.js & SSR/SSG", "Component libraries & design systems", "Testing (Jest, React Testing Library)", "Performance optimization", "Animation & UX patterns"],
      },
      {
        title: "Backend & Databases",
        topics: ["Node.js & Express.js", "RESTful API design", "PostgreSQL & MongoDB", "Authentication (JWT, OAuth)", "File uploads & storage"],
      },
      {
        title: "Full Stack Projects & Deployment",
        topics: ["Full stack project architecture", "Docker & CI/CD", "Cloud deployment (AWS/Vercel)", "Monitoring & analytics", "Capstone project"],
      },
    ],
  },
];

export interface Instructor {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin: string;
  bio: string;
  experience: string;
}

// Professional headshots in black attire (Unsplash)
const IMG = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop&crop=face`;

export const instructors: Instructor[] = [
  {
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    company: "Google",
    image: IMG("1569390173732-5c735072c80f"), // Man in black t-shirt
    linkedin: "https://www.linkedin.com/in/rahul-sharma",
    bio: "Ex-Google engineer with deep expertise in distributed systems and algorithms. Passionate about helping engineers crack FAANG interviews.",
    experience: "8+ years",
  },
  {
    name: "Priya Patel",
    role: "Staff Engineer",
    company: "Amazon",
    image: IMG("1573497019940-1c28c88b4f3e"), // Woman professional black top
    linkedin: "https://www.linkedin.com/in/priya-patel",
    bio: "Staff engineer at Amazon. Specializes in backend systems, microservices, and scaling challenges. Loves mentoring aspiring engineers.",
    experience: "10+ years",
  },
  {
    name: "Arjun Mehta",
    role: "Engineering Manager",
    company: "Microsoft",
    image: IMG("1619216313450-866406ac6bb9"), // Man in black t-shirt
    linkedin: "https://www.linkedin.com/in/arjun-mehta",
    bio: "Engineering Manager at Microsoft. Brings leadership experience from building and scaling teams at top product companies.",
    experience: "12+ years",
  },
  {
    name: "Sneha Gupta",
    role: "SDE-3",
    company: "Zomato",
    image: IMG("1580489944761-15a19d654956"), // Woman professional dark attire
    linkedin: "https://www.linkedin.com/in/sneha-gupta",
    bio: "Senior engineer at Zomato with expertise in high-throughput systems. Helped scale order processing to millions of daily requests.",
    experience: "7+ years",
  },
  {
    name: "Vikram Singh",
    role: "Tech Lead",
    company: "Atlassian",
    image: IMG("1607149553624-dce20065fb8b"), // Man in black button-up
    linkedin: "https://www.linkedin.com/in/vikram-singh",
    bio: "Tech Lead at Atlassian. Full-stack expert with deep experience in developer tools, APIs, and platform engineering.",
    experience: "9+ years",
  },
  {
    name: "Ananya Reddy",
    role: "Senior SRE",
    company: "Blinkit",
    image: IMG("1594744803329-e58b31de8bf5"), // Woman professional
    linkedin: "https://www.linkedin.com/in/ananya-reddy",
    bio: "Senior SRE at Blinkit. DevOps and infrastructure specialist. Expert in Kubernetes, observability, and building reliable systems at scale.",
    experience: "6+ years",
  },
];

export const testimonials = [
  {
    name: "Amit Kumar",
    role: "SDE-2 at Amazon",
    text: "Level Up Engineers completely transformed my interview preparation. The 1:1 mentorship and structured approach helped me crack Amazon in just 2 months!",
    avatar: "AK",
  },
  {
    name: "Riya Joshi",
    role: "Backend Engineer at Google",
    text: "The backend engineering program gave me real-world project experience that made all the difference. My mentor's guidance was invaluable.",
    avatar: "RJ",
  },
  {
    name: "Karthik Nair",
    role: "DevOps Engineer at Microsoft",
    text: "From zero DevOps knowledge to landing a role at Microsoft – that's my Level Up Engineers journey. The hands-on approach is unmatched.",
    avatar: "KN",
  },
];

export const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "50+", label: "Hiring Partners" },
  { value: "95%", label: "Placement Rate" },
  { value: "4.9/5", label: "Student Rating" },
];
