import React, { useContext } from 'react';
import SkillPill from './SkillPill';
import { FormDataContext } from '../../../../contexts/contexts';

function HardSkills() {
  const { data } = useContext(FormDataContext);

  return (
    <>
      <h3>Hard Skills</h3>
      <hr className={'mt-[0.25em] mb-[0.5em]'} />
      <ul
        className={
          'flex flex-row items-start justify-start gap-[0.5em] flex-wrap'
        }>
        {data.skills.hardSkills.map((skill, i) => {
          return (
            <SkillPill key={`hard_skill_${i}_${Math.random()}`}>
              {skill}
            </SkillPill>
          );
        })}
      </ul>
    </>
  );
}

export default HardSkills;
