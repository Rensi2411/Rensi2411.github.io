import React from "react";
import style from "../styles/experience.module.css";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className={`container pt-5 pb-5 ${style.experienceSection}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={"sectionHeading"}
        data-outline="EXPERIENCE"
      >
        EXPERIENCE
      </motion.h2>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className={style.experienceItem}>
            <h3 className="h4">Full Stack Web Developer</h3>
            <h4>Ardra AI - San Francisco, California 94108, United States</h4>
            <p><strong>Duration:</strong> July 2024 - November 2024</p>
            <p>
              During my internship at Ardra AI, I contributed to the development of ArdraGPT, <b>a voice-to-graph tool</b>, and worked on the company website's frontend and backend, enhancing both user interactions and data handling.
            </p>
            <ul>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Designed and developed responsive website features using React, Node.js, and MongoDB.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Improved user experience by integrating voice-to-graph APIs into ArdraGPT.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Collaborated on backend services and optimized website performance across devices.
              </motion.li>
            </ul>
            <p>
              This experience deepened my full-stack development skills, preparing me for future opportunities in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
