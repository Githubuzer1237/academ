
import React, { useState, useEffect, useRef } from 'react';
import s from './Studio.module.scss';
import ImageTrail from '../ImageTrail/ImageTrail';

const Studio = () => {
  const imagesArray = [
    '/academy1.jpg',
    '/academy2.jpg',
    '/academy3.jpg',
    '/academy4.jpg',
    '/academy5.jpg',
    '/academy6.jpg',
    '/academy7.jpg',
    '/academy8.jpg',
    '/academy9.jpg',
    '/academy10.jpg',
    '/academy11.jpg',
    '/academy12.jpg',
    '/academy13.jpg',
    '/academy14.jpg',
  ];

  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const intervalId = setInterval(() => {
        if (!containerRef.current) return;

        const { width, height } = containerRef.current.getBoundingClientRect();
        const title = document.querySelector(`.${s.title}`);
        const titleRect = title.getBoundingClientRect();

        const margin = 40; 
        const titleBottom = titleRect.bottom + margin;
        const titleTop = titleRect.top - margin;
        
        let randomX, randomY;
        
        do {
          randomX = Math.floor(Math.random() * (width - 150));  
          randomY = Math.floor(Math.random() * (height - 150)); 
        } while (randomY > titleTop && randomY < titleBottom); 

        const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

        const newImage = {
          id: Date.now(),
          src: randomImage,
          x: randomX,
          y: randomY,
          size: 150, 
        };

        setImages((prevImages) => [...prevImages, newImage]);

        setTimeout(() => {
          setImages((prevImages) =>
            prevImages.filter((img) => img.id !== newImage.id)
          );
        }, 2000);
      }, 2000); 

      return () => clearInterval(intervalId);
    }
  }, [isMobile]);












  const handleMouseMove = (e) => {
    if (!isMobile) {
      const { clientX, clientY } = e;
      const lastPos = lastPosRef.current;
      const distance = Math.sqrt(
        Math.pow(clientX - lastPos.x, 2) + Math.pow(clientY - lastPos.y, 2)
      );

      if (distance >= 150) {
        lastPosRef.current = { x: clientX, y: clientY };

        const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

        const newImage = {
          id: Date.now(),
          src: randomImage,
          x: clientX,
          y: clientY,
        };

        setImages((prevImages) => [...prevImages, newImage]);

        setTimeout(() => {
          setImages((prevImages) =>
            prevImages.map((img) =>
              img.id === newImage.id ? { ...img, visible: false } : img
            )
          );

          setTimeout(() => {
            setImages((prevImages) =>
              prevImages.filter((img) => img.id !== newImage.id)
            );
          }, 500);
        }, 1000);
      }
    }
  };

  return (
     <>
         {/* <div
      className={s.studio}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.title}>academy studio</h1>
        </div>

        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt="Cursor Image"
            className={`${s.image} ${image.visible !== false ? s.visible : s.hidden}`}
            style={{
              position: 'absolute',
              top: image.y,
              left: image.x,
              width: image.size,  
              height: image.size,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>
    </div>


 */}


    <div className={s.drop} >
{/* style={{ height: '100dvh', position: 'relative', paddingTop: 'auto', overflow: 'hidden'}} */}
    <h1 className={s.title}>academy studio</h1>

  <ImageTrail
    // key={key}
    items={[
      // 'https://picsum.photos/id/287/300/300',
      // 'https://picsum.photos/id/1001/300/300',
      // 'https://picsum.photos/id/1025/300/300',
      // 'https://picsum.photos/id/1026/300/300',
      // 'https://picsum.photos/id/1027/300/300',
      // 'https://picsum.photos/id/1028/300/300',
      // 'https://picsum.photos/id/1029/300/300',
      // 'https://picsum.photos/id/1030/300/300',
      '/academy1.jpg',
      '/academy2.jpg',
      '/academy3.jpg',
      '/academy4.jpg',
      '/academy5.jpg',
      '/academy6.jpg',
      '/academy7.jpg',
      '/academy8.jpg',
      '/academy9.jpg',
      '/academy10.jpg',
      '/academy11.jpg',
      '/academy12.jpg',
      '/academy13.jpg',
      '/academy14.jpg',
      // ...
    ]}
    variant={1}
  />
</div>



     </>
  );
};

export default Studio;
