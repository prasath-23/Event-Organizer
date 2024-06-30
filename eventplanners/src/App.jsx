import React from 'react';
import Navbar from './components/NavBar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import styles from './style';
import CTA from './components/Box/CTA.jsx';
// import Calendar from './components/Event/Calander.jsx';
import Hero from './components/Hero/Hero.jsx';

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CTA isAdmin={true} />
          {/* <Calendar isAdmin={true} /> */}
          <Footer />
        </div>
      </div>
    </div>
  ) 
}

export default App 
