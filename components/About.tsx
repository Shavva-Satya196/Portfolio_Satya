import React from 'react';
import { ABOUT_TEXT } from '../constants';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-animate" aria-label="About me">
      <SectionTitle>About</SectionTitle>
      <div>
        <p className="mb-4">
            {ABOUT_TEXT}
        </p>
      </div>
    </section>
  );
};

export default About;