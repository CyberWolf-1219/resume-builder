import React, { useContext } from 'react';
import Course from './Course';
import { FormDataContext } from '../../../../contexts/contexts';

function CoursesSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit'}>
      <td className={'align-top text-left'}>
        <h2>Courses</h2>
      </td>
      <td className={'align-top text-left'}>
        <ul
          className={
            'pl-[1rem] flex flex-row items-start justify-start gap-x-[3em] gap-y-[1em] flex-wrap'
          }>
          {data.coursesTaken.map((course, i) => {
            return (
              <Course
                key={`course_info_${i}_${Math.random()}`}
                courseInfo={course}
              />
            );
          })}
        </ul>
      </td>
    </tr>
  );
}

export default CoursesSection;
