import React from 'react';
import { NAME, ROLE, BIO, SOCIAL_LINKS, RESUME_URL } from '../constants';
import { ArrowUpRightIcon } from './Icons';

interface HeaderProps {
  activeSection: string;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="hidden lg:block">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">{NAME}</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {ROLE}
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            {BIO}
          </p>
        </div>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a className={`group flex items-center py-3 ${activeSection === link.href.substring(1) ? 'active' : ''}`} href={link.href}>
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-12 hidden lg:block">
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
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {SOCIAL_LINKS.map((social) => (
          <li key={social.name} className="mr-5 text-xs shrink-0">
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.name} (opens in a new tab)`}
              className="block hover:text-slate-200 transition"
            >
              <span className="sr-only">{social.name}</span>
              {social.icon ? (
                <social.icon className="h-6 w-6" />
              ) : (
                <span className="font-semibold uppercase tracking-widest">{social.name}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;