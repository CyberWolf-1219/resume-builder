import React from 'react';

interface Props {
  techStack: string[];
}

function TechStack({ techStack }: Props) {
  return (
    <ul className={'mb-[1rem] columns-4'}>
      {techStack.map((tech, i) => {
        return <li key={`tech_${i}_${Math.random()}`}>{tech}</li>;
      })}
    </ul>
  );
}

export default TechStack;
