import React, { useContext } from 'react';
import WorkExperience from './WorkExperience';
import { FormDataContext } from '../../../../contexts/contexts';

function WorkExperienceSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit mb-[1em] text-left align-text-top'}>
      <td className={'w-[30%] align-text-top text-left'}>
        <h2>Work Experience</h2>
      </td>
      <td className={'w-full pl-[1em] align-top text-left'}>
        <ul
          className={
            'flex flex-col items-start justify-start gap-[1em] flex-wrap'
          }>
          {data.workExperience.map((exp, i) => {
            return (
              <WorkExperience
                key={`work_exp_${i}_${Math.random()}`}
                workExp={exp}
              />
            );
          })}
        </ul>
      </td>
    </tr>
  );
}

export default WorkExperienceSection;
