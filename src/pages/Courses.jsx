

import React, { useEffect, useState } from 'react';
import WebCourse from '../components/WebCourse/WebCourse';
import Grafic from '../components/Grafic/Grafic';
import ScratchSection from '../components/ScratchSection/ScratchSection';
import LogoWall from '../components/LogoWall/LogoWall';
import LetterGlitch from '../components/LetterGlitch/LetterGlitch';

const Courses = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/prices')
      .then(response => response.json())
      .then(data => {
        console.log('Полученные цены:', data); 
        setPrices(data); 
      });
  }, []);




  const logoImgs = [
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" }
  ];




  return (
    <>
      <WebCourse price={prices.WebCourse} />
     
      <Grafic price={prices.Grafic} />
     <div style={{height: '300px', width: '100%', position: 'relative'}}>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div>
      <ScratchSection price={prices.ScratchSection} />
         
         
         <LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
  price={prices.NodeJs}
/>





    </>
  );
};

export default Courses;
