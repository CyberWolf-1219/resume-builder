import React, { useContext } from 'react';
import WorkExperience from './WorkExperience';
import { FormDataContext } from '../../../../contexts/contexts';

function WorkExperienceSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit '}>
      <td className={'align-top text-left'}>
        <h2>Work Experience</h2>
      </td>
      <td className={'pl-[1rem] align-top text-left'}>
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
