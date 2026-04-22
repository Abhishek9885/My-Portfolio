import { FaHtml5, FaCss3Alt, FaDatabase, FaBrain } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus, SiMysql, SiExpress } from "react-icons/si";

import certi1 from "./assets/certi1.jpg";
import certi2 from "./assets/certi2.jpg";
import certi3 from "./assets/certi3.jpg";
import certi4 from "./assets/certi4.jpg";
import certi5 from "./assets/certi5.jpg";
import certi6 from "./assets/certi6.jpg";
import certi7 from "./assets/certi7.jpg";

export const roles = ["Full Stack Developer", "CSE Student", "Tech Enthusiast"];

export const certificates = [
  { img: certi1, title: "WEB-A-THON 24 Hackathon" },
  { img: certi2, title: "C++ Certificate" },
  { img: certi3, title: "MongoDB Certificate" },
  { img: certi4, title: "Effective Communication" },
  { img: certi5, title: "C Programming" },
  { img: certi6, title: "Cyber Security" },
  { img: certi7, title: "WEB-A-THON 2.0" }
];

export const skills = [
  { name: "HTML", icon: <FaHtml5 />, glow: "#f97316", level: "Expert", dots: 5, desc: "Built semantic, accessible pages and multi-section portfolio layouts." },
  { name: "CSS", icon: <FaCss3Alt />, glow: "#38bdf8", level: "Advanced", dots: 4, desc: "Crafted animations, responsive layouts using Flexbox & Grid." },
  { name: "JavaScript", icon: <SiJavascript />, glow: "#facc15", level: "Advanced", dots: 4, desc: "Built dynamic UIs, form validations & REST API integrations." },
  { name: "React.js", icon: <FaReact />, glow: "#61dafb", level: "Intermediate", dots: 3, desc: "Developed SPAs with hooks, component architecture & state management." },
  { name: "Node.js", icon: <FaNodeJs />, glow: "#4ade80", level: "Intermediate", dots: 3, desc: "Built REST APIs and server-side logic for full-stack apps." },
  { name: "Express.js", icon: <SiExpress />, glow: "#c0c0c0", level: "Intermediate", dots: 3, desc: "Created routing, middleware & RESTful endpoints for backend services." },
  { name: "MongoDB", icon: <SiMongodb />, glow: "#4db561", level: "Intermediate", dots: 3, desc: "Designed NoSQL schemas & integrated Mongoose with Node.js." },
  { name: "SQL", icon: <SiMysql />, glow: "#818cf8", level: "Intermediate", dots: 3, desc: "Wrote queries, joins & managed relational databases for CRUD projects." },
  { name: "C++", icon: <SiCplusplus />, glow: "#60a5fa", level: "Advanced", dots: 4, desc: "Solved competitive programming problems & built OOP-based projects." },
  { name: "C", icon: <span className="font-bold text-lg">C</span>, glow: "#d1d5db", level: "Beginner", dots: 2, desc: "Learned pointers, memory management & fundamental algorithms." },
  { name: "DBMS", icon: <FaDatabase />, glow: "#fb923c", level: "Intermediate", dots: 3, desc: "Studied normalization, ER models & transaction management." },
  { name: "DSA", icon: <FaBrain />, glow: "#a78bfa", level: "Intermediate", dots: 3, desc: "Practiced arrays, trees, graphs & dynamic programming challenges." },
];
