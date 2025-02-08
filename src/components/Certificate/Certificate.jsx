import { motion, AnimatePresence } from 'framer-motion';
import s from './Certificate.module.scss';
import React, { useState } from 'react';


const Certificate = () => {
   const [selectedPhoto, setSelectedPhoto] = useState(null);


   
  return (
    <div className={s.cert}>
        <div className={s.wrapper}>
         <div className={s.text}>
            <h2>Мы выдаём сертификаты об окончании курса</h2>
            <p>Этот сертификат свидетельствует о вашей компитенции в рамках пройденного курса и принимается работадателями при устройстве на работу.</p>


         </div>

         <motion.img
          src="/it2.png"
          alt="IT Image"
          className={s.image}
          whileHover={{ scale: 1.03 }}
          onClick={() => setSelectedPhoto('/it2.png')}
        />
        </div>















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
  );
};

export default Certificate;
