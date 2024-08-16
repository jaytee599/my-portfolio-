import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isBackToTopRendered, setIsBackToTopRendered] = useState(false);

  const handleFirstTab = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  };

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setIsBackToTopRendered(true);
    } else {
      setIsBackToTopRendered(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // <button
    //   className={`back-to-top ${isBackToTopRendered ? 'visible' : 'hidden'}`}
    //   title="Back to Top"
    //   onClick={backToTopClick}
    // >
    //   <img src="./images/arrow-up.svg" alt="Back to Top" className="back-to-top__image" />
    // </button>

    <a href="#top" className="back-to-top" title="Back to Top">
        <img src="./images/arrow-up.svg" alt="Back to Top" className="back-to-top__image" />
    </a>
  );
};

export default BackToTopButton;
