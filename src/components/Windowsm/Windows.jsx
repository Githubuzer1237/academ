import React from 'react'
import s from './Windows.module.scss';
import Window from '../Window/Window';


const Windows = () => {
  return (
    <>
      <div className="container">
        <div className="line"></div>
      <div className={s.windows}>

  <Window positionx={700} positiony={400}  special="Azim Makhmov" windowtext="Учителя в айти академии самые лучшие!" h1="error 404" />
  <Window positionx={200} positiony={300} special="Aleksandr Martin" windowtext="Спасибо академии за возможность получить столь ценные знания" />
  <Window positionx={300} positiony={150} special="Bobur Ubayev" windowtext="Очень приятные цены на курсы"   />    {/* bgcolor="pink" */}
  <Window positionx={600} positiony={200} special="Odil Khaharov" windowtext="МЕТОД ОБУЧЕНИЯ ПРОСТО ВАУ!!! "   />
   
  
  </div>
      </div>
    </>
  )
}

export default Windows



        {/* <div className={s.pillows}>
        <motion.img    src='/window.gif'
                className={s.pillow}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 0 }}
                style={{
                }}
              ></motion.img>
  <motion.img    src='/window.gif'
                className={s.pillow}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 0 }}
                style={{
                }}
              ></motion.img>

        </div> */}