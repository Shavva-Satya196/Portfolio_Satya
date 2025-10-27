import React from 'react';
import { NAME, ROLE, BIO, RESUME_URL } from '../constants';
import { ArrowUpRightIcon } from './Icons';

const Hero: React.FC = () => {
  // This content is shown in the Header on lg screens, 
  // so we hide this component there to avoid duplication.
  return (
    <div className="lg:hidden">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        {NAME}
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {ROLE}
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        {BIO}
      </p>
      <div className="mt-8">
        <a
          className="inline-flex items-center text-sm font-medium leading-tight text-slate-200 group"
          aria-label="View Full Résumé (opens in a new tab)"
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Résumé
            </span>
            <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;