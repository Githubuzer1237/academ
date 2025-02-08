import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './ParallaxGallery.module.scss';

const photos = [
  '/it1.png',
  '/it2.png',
  '/it5.jpg',
  '/it4.png',
];

const ParallaxGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
   <>
   <h1 className={s.title}>Наши приятные фотографии с академии</h1>
    <div className={s.gallery}>
      
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          className={s.photoContainer}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedPhoto(photo)}
        >
          <img src={photo} alt={`Photo ${index + 1}`} className={s.photo} />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className={s.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              src={selectedPhoto}
              alt="Enlarged"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={s.lightboxImage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default ParallaxGallery;
