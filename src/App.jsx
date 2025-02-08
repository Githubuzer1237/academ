import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import StudioPage from './pages/StudioPage';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import Courses from './pages/Courses';
import AdminPanel from './pages/AdminPanel';
import FreeLessonPage from './pages/FreeLessonPage';
import BranchesPage from './pages/BranchesPage';
import RealFooter from './components/RealFooter/RealFooter';

const App = () => {
  const location = useLocation();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setShowAnimation(true);
  }, [location.pathname]);

  return (
    <>
      <Loader
        showAnimation={showAnimation}
        onComplete={() => setShowAnimation(false)}
      />

      <AnimatePresence mode="wait">
        {!showAnimation && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/studio" element={<StudioPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admin-panel" element={<AdminPanel />} />
              <Route path="/freelesson" element={<FreeLessonPage />} />
              <Route path="/branches" element={<BranchesPage />} />

                                                               
            </Routes>
            <Footer />
            <RealFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
// npx json-server --watch db.json --port 3000
