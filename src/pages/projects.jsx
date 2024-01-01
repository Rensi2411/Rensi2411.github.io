import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";

import bewakoofImg from "./Images/bewakoof.png";
import bewakoofS from "./Images/bewakoof small.png";


import wineImg from "./Images/wine1.png";
import wineSImg from "./Images/wine2.png";
// import instagramSImg2 from "./Images/insta.png";
// import portfolio from "./Images/portfolio.png";
// import portfolio_small from "./Images/port f.png";
import autoImg from './Images/auto1.png'
import autoSImg from './Images/auto2.png'

import { motion, Variants } from "framer-motion";

const data = [
  
  {
    id: 1,
    title: "Wine Shop",
    subTitle:
      "A fully-featured Wineshop built with React-redux.",
    img1: wineImg,
    img2: wineSImg,
    desc: "Team of five crafted a simple, user-friendly wineShop for a seamless E-commerce experience.",
    techUsed: [
      "React",
      "Redux",
      "Javascript",
      "HTML",
      "CSS",
      "Firebase",
      "json-server",
    ],
    features: [ "Login Signup", "Home Page","Product page", "Cart Page", "Checkout page"],
    resp:" Independently created login and signup page with firebase authentication with responsiveness.",
    git: "https://github.com/Vikaschaturvedi167/WineShop_project",
    preview: "https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/index.html",
  },
  
  {
    id: 2,
    title: "Auto Parts",
    subTitle:
      "Front-end based E-commerce platform with smooth flow.",
    img1: autoImg,
    img2: autoSImg,
    desc: " Responsive and user-friendly auto-part website.",
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "json-server"
      ,
      
    ],
    features: ["Login Signup","Home Page", "Product Page","Product Details","Cart Page", "Checkout page", ],
    resp:"Developed the full responsive navbar, homepage and footer.",
    git: "https://github.com/MridulKatara/spiffy-pail-5202",
    preview: "https://beautiful-cobbler-3d45b1.netlify.app/",
  },
  
  
   
  {
    id: 3,
    title: "Bewakoof Clone",
    subTitle: "An E-Commerce website",
    img1: bewakoofImg,
    img2: bewakoofS,
    desc: "Build clone of Bewakoof.com in 7 days.",
    techUsed: ["HTML", "CSS", "JavaScript", "Local Storage"],
    features: ["Login","Homepage", "Productpage", "Cart Page", "Checkout Page"],
    resp: "Developed the full responsive navbar, homepage and footer, also helped to create productpage.",
    git: "https://github.com/Shrutij512/bewakoof_clone",
    preview: "https://ubiquitous-cannoli-3df927.netlify.app/",
  },
  
];

const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="PROJECTS"
      >
        PROJECTS
      </motion.h2>
      <div className={` ${style.container}`}>
        {/*  */}
        {data.map((ele, ind) => (
          <Project key={ele.id} {...ele} ind={ind} />
        ))}

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
