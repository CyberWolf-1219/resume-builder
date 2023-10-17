import React from 'react';

interface Props {
  bulletpoints: string[];
}

function Bulletpoints({ bulletpoints }: Props) {
  return (
    <ul>
      {bulletpoints.map((bulletpoint, i) => {
        return (
          <li key={`challenge_${i}_${Math.random()}`}>
            <p>{bulletpoint}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Bulletpoints;
