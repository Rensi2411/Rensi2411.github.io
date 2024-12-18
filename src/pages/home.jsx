import React from "react";
import style from "../styles/home.module.css";
import Typewriter from "typewriter-effect";
import { motion, Variants } from "framer-motion";
import Button from "../components/button/button";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { useBreakpointValue } from "@chakra-ui/react";
const Home = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  const textAnimate = {
    offscreen: variant ? { x: 0, opacity: 0 } : { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  // hello world
  return (
    <div id="home" className={style.home}>
      
      <div className={style.container}>
        <motion.div
          initial={"offscreen"}
          animate={"onscreen"}
          variants={textAnimate}
        >
          <div className={style.left_div}>
            <h2 className={`${style.animated_text} ${style.h_text}}`}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 65,
                  deleteSpeed: 55,

                  cursor: "|",

                  typeString: "A simple yet powerful native javascript",
                  strings: ["Hello 👋", "Hii 👋", "Namaste 🙏"],
                }}
              />
            </h2>

            <h1 id="user-detail-name">
              I am <span className={`${style.h_text}`}>Rensi Dudhat</span>{" "}
            </h1>
            <h1 id="user-detail-intro">Aspiring Full Stack </h1>
            <h1 className={`${style.h_text}`}>Developer</h1>
            <div className="d-flex gap-2">
              <a href="https://github.com/Rensi2411" target="blank">
                <Button text={<AiFillGithub />} />
              </a>
              <a href="https://www.linkedin.com/in/rensi-dudhat-95752125b/" target="blank">
                <Button text={<AiFillLinkedin />} />
              </a>
              <a href="mailto:rensidudhat2411@gmail.com">
                <Button text={<AiOutlineMail />} />
              </a>
            </div>
          </div>
        </motion.div>
        <div className={`${style.right_div}`}>
          <img
            className={`${style.home_img}`}
            src="https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
            alt=""
          />
        </div>
      </div>
     
    </div>
  );
};

export default Home;
