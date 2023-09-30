import React from 'react';
import { CourseInfo } from '../../../../types';

interface Props {
  courseInfo: CourseInfo;
}

function Course({ courseInfo }: Props) {
  return (
    <li className={'list-disc'}>
      <div>
        <p className={'text-[1.1em] leading-[100%]'}>
          <small>{courseInfo.institute}</small>
          <br />
          <strong>{courseInfo.name}</strong>
        </p>
      </div>
    </li>
  );
}

export default Course;
