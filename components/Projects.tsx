import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-animate" aria-label="Selected projects">
      <SectionTitle>Projects</SectionTitle>
      <div>
        <ul className="group/list">
          {PROJECTS.map((project, index) => (
            <li key={index} className="mb-12">
                <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;