import React from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';

function SkillsSection() {
  return (
    <tr className={'w-full h-fit '}>
      <td className={'w-[30%] align-top text-left'}>
        <h2>Skills</h2>
      </td>
      <td className={'w-full pl-[1em] align-top text-left'}>
        <div
          className={'flex flex-col items-stretch justify-start gap-[0.5em]'}>
          <HardSkills />
          <SoftSkills />
        </div>
      </td>
    </tr>
  );
}

export default SkillsSection;
