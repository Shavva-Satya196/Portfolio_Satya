
import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {children}
    </div>
  );
};

export default SkillBadge;
