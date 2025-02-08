import React from 'react';
import s from './Partners.module.scss';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.photo}>
              <motion.div
                className={`${s.drag} ${s.drag1}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 120 }}
                style={{
                  width: 300,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag2}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag3}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
            </div>
            <h1>
            yandex, netflix, mattel, paramount, coca-cola <br />
            доверяют нам и верят что мы дадим возможность всем принести лучшие и нужные знания ради развития их будущего
            </h1>
            <div className={s.photo}>
            <motion.div
                className={`${s.drag} ${s.drag4}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag5}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag6}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
