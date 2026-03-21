import kforum from "../img/projects/kforum.png";
import timetable from "../img/projects/timetable.png";
import autove from "../img/experience/autoveX.png"


export const HOME_TEXT = 
  "Full Stack Developer Intern @ AutoveX\n" +
  "Computer Engineer Student @ National University of Singapore\n" +
  "& An Aspiring Backend Software Developer";

// export const ABOUT_TEXT = "I am a Developer and Designer based in Pune, India. \
// I have always been fascinated by Knowledge and learning new things. Throughout my life, \
// I have spoken, read and written in English fluently. Currently, I'm exploring Restful API's \
// as part of my skillset. When not working on projects or spending time with family or friends, \
// you can usually find me watching YouTube videos or listening to music.";

export const ABOUT_TEXT = [
  <>
    I see coding as more than just solving problems; it’s a way to <strong>build real products</strong> that people can actually use and benefit from.
  </>,
  <>
    People often say coding is dry and tedious, but they’ve probably never felt the moment when <strong>errors disappear</strong> and something you built finally <strong>comes to life</strong>.
  </>,
  <>
    Through my experience, including working in a <strong>startup environment</strong>, I’ve seen how challenging it is to turn ideas into <strong>real, impactful products</strong>. Tight deadlines, constant iteration, and problem-solving under pressure have shaped how I approach development. These experiences have strengthened my drive to <strong>create meaningful solutions</strong>, and I’m motivated to keep building products that not only work well, but also <strong>make a tangible difference</strong> in people’s lives.
  </>
];

export const EXPERIENCE = {
  Company: "AutoveX",
  Role: "Full Stack Software Developer Intern",
  Timeline: "March 2026 - Present",
  image: autove,
  Description: [
    <>Develop backend API features using <strong>FastAPI</strong> and <strong>Django</strong>, implementing dynamic filtering for flexible database retrieval.</>,
    <>Automate API documentation via <strong>Django REST Framework</strong> serializers, ensuring synchronization between backend logic and developer references.</>,
    <>Orchestrate containerized backend services using <strong>Docker</strong> within a production deployment stack to maintain environment parity.</>
  ],
  TechStack: ["Python (Django, FastAPI)", "Redis", "Docker", "Nginx", "HTML"]
};

export const PROJECTS = [
  {
    Name: "KForum",
    Platform: "https://github.com/Michael-coding06/KForum",
    Timeline: "November 2025 – Present",
    Image: kforum,
    Description: [
      <>Developed a high-concurrency web forum utilizing <strong>vertical scaling</strong> and load balancing to ensure <strong>low-latency</strong> performance and scalability for a growing user base.</>,
      <>Architected a containerized full-stack application using Docker and AWS EC2, designing a secure PostgreSQL schema and <strong>JWT-based authentication</strong> with HTTP-only cookie handling.</>,
      <>Engineered a bi-directional messaging layer using <strong>Socket.IO</strong> and <strong>Redis Pub/Sub</strong> for real-time commenting.</>
    ],
    TechStack: ["Go (Gin)", "React", "TypeScript", "PostgreSQL", "Docker", "AWS EC2", "Redis", "Socket.IO"]
  },
  {
    Name: "NUS Schedule Boss",
    Platform: "https://github.com/Michael-coding06/NUS-ScheduleBoss",
    Timeline: "May 2025 – July 2025",
    Image: timetable,
    Description: [
      <>Developed an AI-integrated module management platform to streamline academic planning through NLP and interactive data visualization.</>,
      <>Integrated an <strong>OpenAI-powered chatbot</strong> with persistent <strong>MongoDB</strong> history to automate scheduling via NLP and aggregated Reddit-based course reviews for informed decision-making.</>,
      <>Engineered a full-stack solution featuring a dynamic timetable visualizer and a contextual notification system to provide personalized real-time schedule reminders.</>
    ],
    TechStack: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Supabase", "Python"]
  }
];

export const SKILLS = {
  Programming: [
    "Go",
    "C++",
    "Python",
    "JavaScript (Intermediate)",
    "Java (Beginner)"
  ],
  "Frameworks & Web": [
    "React",
    "Node.js",
    "Express",
    "Django",
    "FastAPI",
    "HTML/CSS",
    "Nginx"
  ],
  "Cloud & Tools": [
    "Docker",
    "AWS (EC2)",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Git"
  ],
  "AI & Data": [
    "OpenAI API",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Matplotlib"
  ]
};