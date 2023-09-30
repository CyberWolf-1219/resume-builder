import React, { useContext } from 'react';
import Education from './Educationt';
import { FormDataContext } from '../../../../contexts/contexts';

function EducationSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit'}>
      <td className={'align-top text-left'}>
        <h2>Education</h2>
      </td>
      <td className={'align-top text-left'}>
        <ul
          className={
            'pl-[1rem] flex flex-row items-start justify-start gap-[0.5em] flex-wrap'
          }>
          {data.educationInformation.map((edData, i) => {
            return (
              <Education
                key={`education_${i}_${Math.random()}`}
                educationData={edData}
              />
            );
          })}
        </ul>
      </td>
    </tr>
  );
}
export default EducationSection;
