// import React, { useState } from 'react';
// import s from './Team.module.scss';

// const teamMembers = [
//   { name: 'РУСЛАН : ГЛАВНЫЙ /', image: '/academy1.jpg' },
//   { name: 'АББОС : УЧИТЕЛЬ /', image: '/academy8.jpg' },
//   { name: 'АЗИМ : FRONTEND DEVELOPER /', image: '/academy3.jpg' },
//   { name: 'ПОЛИНА : КТО-ТО /', image: '/academy1.jpg' },
//   { name: 'ДИЕРА : АДМИН /', image: '/academy3.jpg' },
//   { name: 'БОБУР : УЧИТЕЛЬ /', image: '/academy2.jpg' },
//   { name: 'ЭРНЕСТ : КОВОРКЕР /', image: '/academy7.jpg' },
//   { name: 'ЛАЗИЗ : УЧИТЕЛЬ /', image: '/academy9.jpg' },
//   { name: 'АДМИН : /', image: '/academy13.jpg' },
//   { name: 'ЮСУФ : УЧИТЕЛЬ /', image: '/academy14.jpg' },
//   { name: 'РУСЛАН : ГЛАВНЫЙ /', image: '/academy4.jpg' },
//   { name: 'АББОС : УЧИТЕЛЬ /', image: '/academy8.jpg' },
//   { name: 'АЗИМ : FRONTEND DEVELOPER /', image: '/academy5.jpg' },
//   { name: 'ПОЛИНА : КТО-ТО /', image: '/academy1.jpg' },
//   { name: 'ДИЕРА : АДМИН /', image: '/academy11.jpg' },
//   { name: 'БОБУР : УЧИТЕЛЬ /', image: '/academy9.jpg' },
//   { name: 'ЭРНЕСТ : КОВОРКЕР /', image: '/academy5.jpg' },
//   { name: 'ЛАЗИЗ : УЧИТЕЛЬ /', image: '/academy14.jpg' },
//   { name: 'АДМИН : /', image: '/academy9.jpg' },
//   { name: 'ЮСУФ : УЧИТЕЛЬ /', image: '/academy4.jpg' },
// ];

// const Team = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className={s.teamContainer}>
//       <div className="line"></div>
//       <p>Наша команда</p>
     
//       <div className={s.members}>
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className={s.member}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             style={{
//                color: hoveredIndex === null || hoveredIndex === index ? 'black' : 'gray',
//              }}
//           >
//             {member.name}
//             {hoveredIndex === index && (
//               <div className={s.imageContainer}>
//                 <img src={member.image} alt={member.name} />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="line"></div>

//     </div>
//   );
// };

// export default Team;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './Team.module.scss';

const teamMembers = [
  { name: 'РУСЛАН : руководитель /', image: '/ruslan.jpg' },
  { name: 'АББОС : УЧИТЕЛЬ /', image: '/academy8.jpg' },
  { name: 'ПОЛИНА : КТО-ТО /', image: '/academy1.jpg' },
  { name: 'никита : учитель /', image: '/nikita.jpg' },
  { name: 'ЛАЗИЗ : УЧИТЕЛЬ /', image: '/laziz.jpg' },
  { name: 'ЮСУФ : УЧИТЕЛЬ /', image: '/usuf.jpg' },
  { name: 'бобур : УЧИТЕЛЬ /', image: '/bobur.jpg' },

];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleMemberClick = (index) => {
    if (window.innerWidth <= 500) {
      setSelectedPhoto(teamMembers[index].image);
    }
  };

  return (
    <div className={s.teamContainer}>
      <div className="line"></div>
      <p>Наша команда</p>
      <div className={s.members}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={s.member}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleMemberClick(index)}
            style={{
              color: hoveredIndex === null || hoveredIndex === index ? 'black' : 'gray',
            }}
          >
            {member.name}
            {hoveredIndex === index && window.innerWidth > 500 && (
              <div className={s.imageContainer}>
                <img src={member.image} alt={member.name} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="line"></div>

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

export default Team;
