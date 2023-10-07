import React from 'react';
import BulletPoint from './BulletPoint';
import { WorkExp } from '../../../../types';

interface Props {
  workExp: WorkExp;
}

function WorkExperience({ workExp }: Props) {
  return (
    <li className={''}>
      <div>
        <p className={'mb-[0.5em] text-[1.1em] leading-[100%]'}>
          <small>{workExp.workplace}</small>
          <br />
          <strong>{workExp.job}</strong>
        </p>
        <ul className={''}>
          {workExp.experience.map((bulletpoint, i) => {
            return (
              <BulletPoint
                key={`work_exp_bullet_${i}_${Math.random()}`}
                text={bulletpoint}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default WorkExperience;
