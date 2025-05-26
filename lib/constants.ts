import { Project, Experience, Skill, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Inventory',
    description:
      'Inventory is an inventory management system. Developed using Java for the backend and MongoDB for data storage, the system enables efficient stock management and role-based user operations.',
    image: '/images/projects/inventory.png',
    tags: ['Java', 'JavaFX', 'MongoDB', 'Redis', 'MVC', 'DAO'],
    link: 'https://github.com/MOHAJII/Inventory-Management-System-with-Blockchain-Integration',
    year: "2025",
  },
  {
    id: 2,
    title: 'Blind Assistance System',
    description:
      'A mobile assistant system for blind individuals, utilizing Python, HuggingFace for AI models, and IoT integration for smart interactions.',
    image: '/images/projects/blind-assistance.png',
    tags: ['Python', 'Mobile', 'HuggingFace', 'IoT'],
    link: 'https://github.com/yourusername/blind-assistance',
    year: "2025",
  },
  {
    id: 8,
    title: 'Real Estate Website',
    description:
      'A modern real estate website developed using React and Vite, inspired by a Zainkeepscode tutorial. The site features a sleek UI/UX with a hero search section, dynamic property listings, reusable components, and contact/about sections — designed to strengthen practical React development skills.',
    image: '/images/projects/real-estate.png',
    tags: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    link: 'https://github.com/MOHAJII/Real-Estate-website',
    year: "2025",
  },
  {
    id: 3,
    title: 'Edutris',
    description:
      'Edutris is a culture-enriched, Tetris-inspired command-line game built in C++ that combines Moroccan heritage and logic-based gameplay. Players choose a Moroccan city, answer a trivia question, and assemble answers via falling letters in a Tetris style.',
    image: '/images/projects/edutris.png',
    tags: ['C++', 'CLI', 'Game', 'Culture', 'Education'],
    link: 'https://github.com/MOHAJII/vision-assist-ai',
    year: "2024",
  },
  {
    id: 4,
    title: 'SortRace',
    description:
      'SortRace is a command-line app developed in C that compares sorting algorithms by generating tables of random numbers, timing the sort, and visualizing results using Plotlib.',
    image: '/images/projects/sortrace.png',
    tags: ['C', 'Sorting Algorithms', 'Plotlib', 'CLI'],
    link: 'https://github.com/MOHAJII/Sorting-time-complexity-comparison',
    year: "2025",
  },
  {
    id: 5,
    title: 'AgeCalc',
    description:
      'AgeCalc is a web app built with HTML, CSS, and JavaScript that calculates the user’s exact age in years, months, and days based on birthdate input. Focused on front-end practice with DOM manipulation and event-driven logic.',
    image: '/images/projects/agecalc.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM', 'Git'],
    link: 'https://github.com/MOHAJII/age-calculator-web-site',
    year: "2024",
  },
  {
    id: 6,
    title: 'Mobile Chatbot',
    description:
      'A cross-platform mobile chatbot application developed using Flutter and integrated with HuggingFace models for natural language understanding.',
    image: '/images/projects/mobile-chatbot.png',
    tags: ['Flutter', 'HuggingFace', 'Mobile', 'AI'],
    link: 'https://github.com/MOHAJII/Flutter_chatbot_app',
    year: "2025",
  },
  {
    id: 7,
    title: 'IMC Calculator',
    description:
      'The IMC Calculator is an Android app that calculates Body Mass Index (BMI) from user-provided weight and height. Built using Java and XML, it features a clean, responsive UI with no backend storage.',
    image: '/images/projects/imc-calculator.png',
    tags: ['Java', 'Android', 'XML', 'BMI', 'Mobile', 'Git'],
    link: 'https://github.com/MOHAJII/IMC-Calculator-Android',
    year: "2025",
  },
];


export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'OCP',
    duration: 'July 2024 – August 2024',
    description: 'Software engineering internship carried out in Khouribga, Morocco, involving development and maintenance of software solutions.',
    location: 'Khouribga, Morocco',
  },
];


export const SKILLS: Skill[] = [
  { id: 1, name: 'Java', icon: 'code' },
  { id: 2, name: 'C', icon: 'code' },
  { id: 3, name: 'C++', icon: 'code' },
  { id: 4, name: 'JavaScript', icon: 'code' },
  { id: 5, name: 'TypeScript', icon: 'code-2' },
  { id: 6, name: 'PHP', icon: 'code' },
  { id: 7, name: 'Python', icon: 'code' },
  { id: 8, name: 'Kotlin', icon: 'code' },
  { id: 9, name: 'Oracle', icon: 'database' },
  { id: 10, name: 'MySQL', icon: 'database' },
  { id: 11, name: 'MongoDB', icon: 'database' },
  { id: 12, name: 'Angular', icon: 'component' },
  { id: 13, name: 'React', icon: 'component' },
  { id: 14, name: 'Next.js', icon: 'component' },
  { id: 15, name: 'Node.js', icon: 'server' },
  { id: 16, name: 'Spring Boot', icon: 'server' },
  { id: 17, name: 'Flutter', icon: 'mobile' },
  { id: 18, name: 'Git', icon: 'git' },
  { id: 19, name: 'Docker', icon: 'server' },
  { id: 20, name: 'Redis', icon: 'database' },
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    title: "Diplôme d'ingénieur : Génie du Logiciel et des Systèmes Informatiques Distribués",
    institution: "École Normale Supérieure de l'Enseignement Technique",
    location: "Mohammedia, Maroc",
    duration: "2023 - Présent",
    description: "Formation d'ingénieur orientée vers le développement logiciel avancé, les systèmes distribués, et les technologies informatiques modernes.",
  },
  {
    id: 2,
    title: "DEUST : Mathématiques, Informatique et Physique (MIP)",
    institution: "Faculté des Sciences et Techniques",
    location: "Mohammedia, Maroc",
    duration: "2021 - 2023",
    description: "Diplôme universitaire axé sur les bases scientifiques et techniques en mathématiques, informatique et physique.",
  },
  {
    id: 3,
    title: "Baccalauréat : Sciences Physiques",
    institution: "Lycée Cadi Ayad",
    location: "El Jadida, Maroc",
    duration: "2020 - 2021",
    description: "Diplôme du secondaire avec spécialisation en physique, chimie et mathématiques.",
  },
];


