import React, { useContext } from 'react';
import Education from './Educationt';
import { FormDataContext } from '../../../../contexts/contexts';

function EducationSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit '}>
      <td className={'w-[30%] align-top text-left'}>
        <h2>Education</h2>
      </td>
      <td className={'w-full pl-[1em] align-top text-left'}>
        <ul
          className={
            'flex flex-row items-start justify-start gap-[0.75em] flex-wrap'
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
