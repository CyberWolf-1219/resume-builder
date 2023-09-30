import React, { useContext } from 'react';
import { FormDataContext } from '../../../../contexts/contexts';

function PersonalStatementSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit'}>
      <td className={'align-top text-left'}>
        <h2>Statement</h2>
      </td>
      <td className={'pl-[1rem] align-top text-left'}>
        <p className={'text-[1em] leading-[1.5em]'}>
          {data.professionalStatement}
        </p>
      </td>
    </tr>
  );
}

export default PersonalStatementSection;
