
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-animate" aria-label="Contact">
      <SectionTitle>Contact</SectionTitle>
      <div>
        <h2 className="text-2xl font-bold text-slate-200 mb-4">Get In Touch</h2>
        <p className="mb-4">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
        </p>
        <a 
          href="mailto:shavvasatya196@gmail.com"
          className="inline-block rounded-md bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300 hover:bg-teal-400/20 transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

import SectionTitle from './SectionTitle';

export default Contact;