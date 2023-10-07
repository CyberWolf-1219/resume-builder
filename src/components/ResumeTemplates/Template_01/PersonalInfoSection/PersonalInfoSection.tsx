import React, { useContext } from 'react';
import css from './style.module.css';

import { FormDataContext } from '../../../../contexts/contexts';

function PersonalInfoSection() {
  const { data } = useContext(FormDataContext);

  return (
    <>
      <div className={'flex flex-col items-center'}>
        <h1>
          {data.personalInformation.userName}&nbsp;|&nbsp;
          {data.jobInformation.position}
        </h1>
        <ul
          className={`${css.contact_info_list} flex flex-row items-center justify-center gap-[2rem] p-0`}>
          <li className={''}>{data.personalInformation.address.country}</li>
          <li className={''}>{data.personalInformation.mobile}</li>
          <li className={''}>{data.personalInformation.email}</li>
        </ul>
        <ul className={`${css.socialmedia_link_list} flex flex-row gap-[1rem]`}>
          <li className={''}>
            <a href={data.personalInformation.linkedInLink}>linkedIn</a>
          </li>
          <li className={''}>
            <a href={data.personalInformation.githubLink}>Github</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PersonalInfoSection;
