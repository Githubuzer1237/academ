import React from 'react'
import Branches from '../components/Branches/Branches'
import LogoWall from '../components/LogoWall/LogoWall'
import GridDistortion from '../components/GridDistortion/GridDistortion';


const BranchesPage = () => {
  
  const logoImgs = [
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" }
  ];


  const items = [
    {
      image: 'it1.png',
      link: '/branches',
    },
    {
      image: 'it2.png',
      link: '/branches',
    },
    {
      image: 'it3.png',
      link: '/branches',
    },
    {
      image: 'it4.png',
      link: '/branches',
    }
  ];
  



  return (
   <>
   <Branches />
   <div style={{height: '150px', width: '100%', position: 'relative'}}>
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

<div style={{ width: '100%', height: '700px', position: 'relative' }}>
  <GridDistortion
    // imageSrc="https://picsum.photos/1920/1080?grayscale"
    imageSrc="/filial_1_2.png"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className="custom-class"
  />
</div>

   </>
  )
}

export default BranchesPage