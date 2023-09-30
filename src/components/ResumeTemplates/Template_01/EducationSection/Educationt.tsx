import React from 'react';
import { EducationInfo } from '../../../../types';
import Bulletpoint from './Bulletpoin';

interface Props {
  educationData: EducationInfo;
}

function Education({ educationData }: Props) {
  return (
    <li className={'list-disc marker:w-[5px]'}>
      <div>
        <p className={'mb-[0.5em] text-[1.1em] leading-[100%]'}>
          <small>{educationData.institute}</small>
          <br />
          <strong>{educationData.degree}</strong>
        </p>
        <ul className={''}>
          {educationData.highlights.map((bulletpoint, i) => {
            return (
              <Bulletpoint
                key={`education_highlight_${i}_${Math.random()}`}
                text={bulletpoint}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default Education;
