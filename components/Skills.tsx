import React from 'react';
import { SKILLS } from '../constants';
import SkillBadge from './SkillBadge';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-animate" aria-label="Skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="space-y-8">
        {SKILLS.map((category) => (
          <div key={category.title}>
            <h3 className="font-medium text-slate-200 mb-2">{category.title}</h3>
            <div className="flex flex-wrap">
              {category.skills.map((skill) => (
                <div key={skill} className="mr-1.5 mt-2">
                    <SkillBadge>{skill}</SkillBadge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;