import React, { useContext } from 'react';
import { FormDataContext } from '../../../../contexts/contexts';

function PersuationSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit mb-[1em] text-left align-text-top'}>
      <td className={'w-[30%]'}>
        <h2 className={'leading-[1.2]'}>Professional Statement</h2>
      </td>
      <td className={'w-full'}>
        <p>
          <span className={'underline font-semibold text-[1.2em]'}>
            {data.jobInformation.position}
          </span>
          <br />
          {data.jobInformation.qualificationExplanation}
        </p>
      </td>
    </tr>
  );
}

export default PersuationSection;
