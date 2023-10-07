import React, { useContext } from 'react';
import SkillPill from './SkillPill';
import { FormDataContext } from '../../../../contexts/contexts';

function HardSkills() {
  const { data } = useContext(FormDataContext);

  return (
    <div>
      <p>
        <strong>Soft Skills</strong>
      </p>
      <ul className={'columns-4'}>
        {data.skills.hardSkills.map((skill, i) => {
          return (
            <SkillPill key={`hard_skill_${i}_${Math.random()}`}>
              {skill}
            </SkillPill>
          );
        })}
      </ul>
    </div>
  );
}

export default HardSkills;
