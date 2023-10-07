import React from 'react';

interface Props {
  children: React.ReactNode;
}

function SkillPill({ children }: Props) {
  return (
    <li
      className={
        'w-fit h-fit text-black leading-[1.5] rounded-full whitespace-wrap'
      }>
      {children}
    </li>
  );
}

export default SkillPill;
