import React from 'react';

interface Props {
  children: React.ReactNode;
}

function SkillPill({ children }: Props) {
  return (
    <li
      className={
        'w-fit h-fit px-[1em] pt-[0.5em] pb-[0.6em] font-semibold text-black leading-[100%] rounded-full bg-sky-300/40 whitespace-nowrap'
      }>
      {children}
    </li>
  );
}

export default SkillPill;
