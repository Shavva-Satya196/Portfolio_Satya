import React from 'react';
import { Project } from '../types';
import { LinkIcon, GithubIcon } from './Icons';
import SkillBadge from './SkillBadge';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasLinks = project.liveUrl || project.codeUrl;

  return (
    <a
      href={project.liveUrl || project.codeUrl || '#'}
      target="_blank"
      rel="noreferrer noopener"
      className="block group relative grid gap-4 pb-1 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      aria-label={`${project.title} (opens in a new tab)`}
    >
      <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10">
        <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base">
          <span>
            {project.title}
            {hasLinks && (
              <span className="inline-block">
                <LinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            )}
          </span>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.description}</p>
        <div className="mt-2 flex items-center space-x-4 text-xs">
          {project.liveUrl && (
            <div 
              className="flex items-center text-slate-400 group-hover:text-teal-300"
            >
              <LinkIcon className="mr-1 h-3 w-3" /> Live
            </div>
          )}
          {project.codeUrl && (
            <div
              className="flex items-center text-slate-400 group-hover:text-teal-300"
            >
              <GithubIcon className="mr-1 h-3 w-3" /> Code
            </div>
          )}
        </div>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="mr-1.5 mt-2">
              <SkillBadge>{tag}</SkillBadge>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
