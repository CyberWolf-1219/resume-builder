import React, { useContext } from 'react';
import { FormDataContext } from '../../../../contexts/contexts';

function ProfileSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit '}>
      <td className={'w-[30%] align-top text-left'}>
        <h2>Profile</h2>
      </td>
      <td className={'w-full pl-[1em] align-top text-left'}>
        <p className={'max-w-[75em] text-[1em] leading-[1.5em]'}>
          {data.profile.slice(0, 1000)}
        </p>
      </td>
    </tr>
  );
}

export default ProfileSection;
