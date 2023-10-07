import React, { useContext } from 'react';
import SkillPill from './SkillPill';
import { FormDataContext } from '../../../../contexts/contexts';

function SoftSkills() {
  const { data } = useContext(FormDataContext);

  return (
    <div>
      <p>
        <strong>Soft Skills</strong>
      </p>
      <ul className={'columns-2'}>
        {data.skills.softSkills.map((skill, i) => {
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

export default SoftSkills;
