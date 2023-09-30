import React, { useContext } from 'react';
import { FormDataContext } from '../../../../contexts/contexts';

function PersonalInfoSection() {
  const { data } = useContext(FormDataContext);

  return (
    <div>
      <h1>{data.personalInformation.userName}</h1>
      <h2>{data.personalInformation.seekingJob}</h2>
      <ul className={'flex flex-row items-center justify-center gap-[1em]'}>
        <li className={''}>{data.personalInformation.address.country}</li>
        <li className={''}>{data.personalInformation.mobile}</li>
        <li className={''}>{data.personalInformation.email}</li>
        <li className={''}>{data.personalInformation.linkedInLink}</li>
        <li className={''}>{data.personalInformation.githubLink}</li>
      </ul>
    </div>
  );
}

export default PersonalInfoSection;
