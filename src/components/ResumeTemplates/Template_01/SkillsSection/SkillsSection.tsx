import React from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';

function SkillsSection() {
  return (
    <tr className={'w-full h-fit'}>
      <td className={'align-top text-left'}>
        <h2>Skills</h2>
      </td>
      <td className={'pl-[1rem] align-top text-left'}>
        <HardSkills />
        <br />
        <SoftSkills />
      </td>
    </tr>
  );
}

export default SkillsSection;
