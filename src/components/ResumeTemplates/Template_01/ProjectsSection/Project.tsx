import React from 'react';
import { Project } from '../../../../types';
import Bulletpoint from './Bulletpoint';

interface Props {
  project: Project;
}

function Project({ project }: Props) {
  return (
    <li className={''}>
      <div className={'flex flex-col items-start justify-start gap-[0.5rem]'}>
        <p>
          <strong>{project.name}</strong>
          &nbsp;|&nbsp;
          <a href={project.repoLink}>GitHub Repo</a>
          &nbsp;|&nbsp;
          <a href={project.liveLink}>Live Link</a>
        </p>
        <ul>
          {project.bulletpoints.map((bulletpoint, i) => {
            return (
              <Bulletpoint
                index={i}
                text={bulletpoint}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default Project;
