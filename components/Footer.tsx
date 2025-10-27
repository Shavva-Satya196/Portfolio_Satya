
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 scroll-animate">
      <p>
        Loosely designed in{' '}
        <a href="https://www.figma.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Figma
        </a>{' '}
        and coded in{' '}
        <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Visual Studio Code
        </a>
        . Built with{' '}
        <a href="https://react.dev/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          React
        </a>{' '}
        and{' '}
        <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Vercel
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;