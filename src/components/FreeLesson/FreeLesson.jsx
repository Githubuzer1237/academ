
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import s from "./FreeLesson.module.scss";

const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    isStar: Math.random() < 0.2, 
  }));

const FreeLesson = () => {
  const [particles, setParticles] = useState([]);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setParticles(generateParticles(300));

    const timeout = setTimeout(() => {
      setContentVisible(true);
    }, 5000); 

    return () => clearTimeout(timeout);
  }, []);

  const scrollToConnectSection = () => {
    const section = document.getElementById("zapis");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToQuizSection = () => {
    const section = document.getElementById("quiz");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.particles}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={s.particle}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
              scale: particle.isStar ? 0.5 : 0.5,
            }}
            animate={{
              x: particle.isStar
                ? particle.x
                : [particle.x, window.innerWidth / 2],
              y: particle.isStar
                ? particle.y
                : [particle.y, window.innerHeight / 2],
              rotate: particle.isStar ? 0 : [0, 360, 720],
              opacity: particle.isStar ? 1 : [1, 0.5, 0],
              scale: particle.isStar ? 0.5 : [0.5, 1, 1],
            }}
            transition={{
              duration: particle.isStar ? 0 : 5,
              delay: Math.random() * 1,
              ease: "easeInOut",
            }}
            style={{
              background: particle.isStar ? "#fff" : "#14b8a6",
              width: particle.isStar ? "3px" : "5px",
              height: particle.isStar ? "3px" : "5px",
            }}
          />
        ))}
      </div>

      <motion.div
        className={`${s.content} ${contentVisible ? s.visible : ""}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: contentVisible ? 1 : 0.8,
          opacity: contentVisible ? 1 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <h1>Приходи на БЕСПЛАТНЫЙ урок и <br />Стань программистом будущего! </h1>
     
        <p>
          Хочешь изменить свою жизнь? Начни с нашего бесплатного пробного урока
          по ЛЮБОМУ направлению! Открой новые возможности и стань частью
          технологического будущего уже сегодня! <br /> <br /> Не можешь определить какое направление тебе по душе? Мы всегда готовы помочь тебе! Проходи тест ниже что бы определится со своим выбором и сделать шаг в свое светлое будущее!
        </p>
       <div className={s.btns}> 
       <button onClick={scrollToConnectSection}>Записаться на урок</button>
       <button onClick={scrollToQuizSection}>   Узнать свое направление</button>
       </div>

      </motion.div>
    </div>
  );
};

export default FreeLesson;
