import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I'm a web developer and designer. I love building apps that solve real-world problems, and that are delightful to use. My specialties include JavaScript, TypeScript, Tailwind and CSS.
            </p>
            <p>
              My background is in Business and IT, and I have a bachelor's degree in  Information Technology from Kwame Nkrumah University of Science and Technology and currently pursuing a graduate certificate in web development in Humber College.
            </p>
            <a href="" className="btn">
              My Resume
            </a>
          </div>

          <div className="about__photo-container">
            <img className="about__photo" src="./images/WhatsApp Image 2024-08-09 at 11.54.23.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
