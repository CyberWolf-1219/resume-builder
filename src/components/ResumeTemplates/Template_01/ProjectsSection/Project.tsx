import React from 'react';
import TechStack from './TechStack';
import Bulletpoints from './Bulletpoints';
import { Project } from '../../../../types';

interface Props {
  project: Project;
}

function Project({ project }: Props) {
  return (
    <li className={'list-disc'}>
      <div className={'flex flex-col items-start justify-start gap-[0.5rem]'}>
        <p>
          <strong>{project.name}</strong> |{' '}
          <a href={project.repoLink}>GitHub Repo</a>
        </p>
        <TechStack techStack={project.techStack} />
        <Bulletpoints bulletpoints={project.challenges} />
      </div>
    </li>
  );
}

export default Project;
