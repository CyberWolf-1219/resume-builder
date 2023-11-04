import React from 'react';

interface Props {
  text: string;
}

function BulletPoint({ text }: Props) {
  return (
    <li className={'list-disc w-full h-fit'}>
      <p className={'whitespace-break-spaces'}>{text}</p>
    </li>
  );
}

export default BulletPoint;
