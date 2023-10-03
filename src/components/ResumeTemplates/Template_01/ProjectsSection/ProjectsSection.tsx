import React, { useContext } from 'react';
import Project from './Project';
import { FormDataContext } from '../../../../contexts/contexts';

function ProjectsSection() {
  const { data } = useContext(FormDataContext);

  return (
    <tr className={'w-full h-fit'}>
      <td className={'w-[30%] align-text-top text-left'}>
        <h2>Projects</h2>
      </td>
      <td className={'w-full pl-[1em] align-top text-left'}>
        <ul className={'flex flex-col items-start justify-start gap-[1rem]'}>
          {data.projects.map((project, i) => {
            return (
              <Project
                key={`project_${i}_${Math.random()}`}
                project={project}
              />
            );
          })}
        </ul>
      </td>
    </tr>
  );
}

export default ProjectsSection;
