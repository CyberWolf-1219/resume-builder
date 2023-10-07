import React, { useContext } from 'react';
import { FormDataContext } from '../../../../contexts/contexts';

function PersuationSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit text-left align-top '}>
      <td className={'w-[30%]'}>
        <h2 className={'leading-[1.2]'}>Professional Statement</h2>
      </td>
      <td className={'w-full pl-[1em]'}>
        <p>
          <strong className={'underline underline-offset-[2px]'}>
            {data.jobInformation.position}
          </strong>
          <br />
          {data.jobInformation.qualificationExplanation.slice(0, 500)}
        </p>
      </td>
    </tr>
  );
}

export default PersuationSection;
