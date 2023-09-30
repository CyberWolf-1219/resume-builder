import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function SkillPill({ children }: Props) {
  return (
    <span
      className={
        'w-fit h-fit px-[1rem] pt-[0.4rem] py-[0.5rem] font-semibold bg-white text-black rounded-md'
      }>
      {children}
    </span>
  );
}

export default SkillPill;
