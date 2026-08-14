export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    skills: ["Python", "Embedded C"],
  },
  {
    label: "Web Technologies",
    skills: ["HTML", "CSS"],
  },
  {
    label: "Database",
    skills: ["MySQL"],
  },
  {
    label: "AI / Machine Learning",
    skills: ["AI/ML", "NLP"],
  },
  {
    label: "Embedded & IoT",
    skills: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
  },
  {
    label: "Developer & Design Tools",
    skills: ["Git", "GitHub", "Proteus", "Figma"],
  },
  {
    label: "Soft Skills",
    skills: ["Analytical Thinking", "Teamwork", "Time Management"],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  screenshot?: string;
};

export const projects: Project[] = [
  {
    title: "AI Mock Interview Platform",
    description:
      "An AI-powered interview practice platform designed to simulate interviews and automatically evaluate candidates.",
    highlights: [
      "AI-driven interview simulation",
      "Resume analysis & automated candidate evaluation",
      "Modular backend with authentication & interview history",
    ],
    tags: ["Python", "AI/ML", "NLP", "HTML", "CSS", "MySQL"],
    liveUrl: "https://ai-mock-interview-platform-ksbw.onrender.com",
    repoUrl: "https://github.com/vaikundaraja28/AI-Mock-Interview-Platform",
    screenshot: "/assets/images/AI_MOCK_INTERVIEW_PLATFORM.png",
  },
  {
    title: "Patient Health Monitoring System",
    description:
      "An IoT-based monitoring system that collects patient health data and provides threshold-based alerts.",
    highlights: [
      "Real-time sensor-based data acquisition",
      "Threshold-based health alerts",
    ],
    tags: ["Arduino", "Embedded C", "IoT", "Sensors"],
    repoUrl: "https://github.com/vaikundaraja28/patient-health-monitoring-system.git",
    screenshot: "/assets/images/PATIENT_HEALTH_MONITORING_SYSTEM.jpg",
  },
  {
    title: "RFID-Based Attendance System Using RTC Module",
    description:
      "An automated attendance solution that combines RFID identification with real-time clock data.",
    highlights: [
      "Automated attendance tracking",
      "Real-time user identification via RFID",
    ],
    tags: ["Arduino", "Embedded C", "RFID", "RTC Module", "IoT", "Proteus Simulation"],
    repoUrl: "https://github.com/vaikundaraja28/RFID-Attendance-System-Using-RTC.git",
    screenshot: "/assets/images/RFID_BASED_ATTENDANCE_SYSTEM.jpeg",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  details: string[];
};

export const internships: ExperienceItem[] = [
  {
    role: "IoT Intern",
    org: "Emglitz Technologies",
    period: "June 2026",
    location: "Coimbatore, Tamil Nadu",
    details: [
      "Developed and tested 3+ IoT prototypes using Arduino and embedded sensors during a 1-month internship.",
      "Performed hardware interfacing, debugging, and validation across 5+ sensor modules.",
      "Improved system stability through systematic testing and validation.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.E. Electronics and Communication Engineering",
    school: "SNS College of Technology",
    period: "2023–2027",
    location: "Coimbatore, Tamil Nadu",
    detail: "CGPA: 8.04",
  },
  {
    degree: "HSC & SSLC",
    school: "Sri Sowdeswari Vidyalaya Matric Higher Secondary School",
    period: "",
    location: "Coimbatore, Tamil Nadu",
    detail: "HSC: 76.2%",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    title: "Oracle Certified Associate: Cloud Infrastructure",
    issuer: "Oracle",
    year: "",
  },
  {
    title: "NPTEL Certification: Cloud Computing",
    issuer: "NPTEL",
    year: "2025/2026",
  },
];

export const contactInfo = {
  email: "vaikundaraja028@gmail.com",
  phone: "+91 9788899018",
  location: "Coimbatore, Tamil Nadu, India",
};

export const socialLinks = {
  github: "https://github.com/vaikundaraja28",
  linkedin: "https://linkedin.com/in/svaikundaraja",
  email: "mailto:vaikundaraja028@gmail.com",
};

export const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];
