import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  cSharp,
  springBoot,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: "springBoot",
    icon: springBoot,
  },
  
];
const experiences = [
  {
    title: "Web Developer",
    company_name: "UTN",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using Angular TS and other related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implementing responsive designs and ensuring browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Application of Design Patterns.",
    ],
  },
  {
    title: "Desktop application with C#",
    company_name: "UTN",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2022 - December 2022",
    points: [
      "Developing and maintaining a desktop application using C# and other related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implementing SOLID, GRASP, and Design patterns.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Utilizing Agile methodologies.",
    ],
  },
  {
    title: "Backend development Java.",
    company_name: "UTN",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2022 - Actual",
    points: [
      "Developing and maintaining REST APIs using Spring Boot and Java as the backend.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Application of the Data Access Object (DAO) design pattern.",
      "Applying unit testing, integration testing, acceptance testing, TDD (Test-Driven Development), BDD (Behavior-Driven Development), and automated testing.",
    ],
  },
  {
    title: "React.jsx Developer",
    company_name: "In-house company",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January  2023 - Actual",
    points: [
      "React application using Hooks and functional components. It also covers topics such as unit and integration testing, Context API, Redux, and the MERN stack (Mongo, Express, React, Node).",
      "Additionally, it utilizes tools like Bootstrap, Mongoose, JWT (JsonWebTokens), Firebase, and explores concepts such as Google authentication, password encryption, and deployment to production.",
      "The main goal is to master React and related technologies to become a FullStack developer.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "The design patterns taught in the Systems Design and Software Engineering course were applied. It was also combined with an elegant, sophisticated and easy to learn style.",
    name: "Professor of System Design",
    designation: "Master's Degree in Information Systems",
    company: "UTNFRVM",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Elian applied the tools, he managed to promote the subject without any problems. I hope he continues with his high expectations in web development.",
    name: "Web development professor",
    designation: "Product Manager",
    company: "UTNFRVM & Customer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    testimonial:
      "He excels in teamwork, in always keeping the entire system up to date and in applying the best optimizations to each project.",
    name: "Web development and testing professor",
    designation: "CTO",
    company: "Customer",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];
const projects = [
  {
    name: "Register players and sports activities.",
    description:
      "Web platform that allows users to search, book and manage users and activities within the university, providing a convenient and efficient solution for users' needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ElianEnria",
  },
  {
    name: "Technological resources in universities.",
    description:
      "Reservation, management and maintenance of the technological resources associated with the Faculties. It also includes user administration and object usage history.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },
      {
        name: "MIT License",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ElianEnria",
  },
  {
    name: "Project start in React",
    description:
      "A complete platform that includes GIF search, TaskList, role management, API consumption and use of all emerging React technologies. This page was made as part of the project.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Test JEST",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ElianEnria",
  },
];

export { services, technologies, experiences, testimonials, projects };
