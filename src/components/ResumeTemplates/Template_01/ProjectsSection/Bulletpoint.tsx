import React from 'react';

interface Props {
  text: string;
  index: number;
}

function Bulletpoint({ text, index }: Props) {
  return (
    <li
      key={`challenge_${index}_${Math.random()}`}
      className={'list-disc w-full h-fit'}>
      <p className={'whitespace-break-spaces'}>{text}</p>
    </li>
  );
}

export default Bulletpoint;
