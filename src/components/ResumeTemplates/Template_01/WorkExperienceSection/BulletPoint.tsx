import React from 'react';

interface Props {
  text: string;
}

function BulletPoint({ text }: Props) {
  return (
    <li className={''}>
      <p>{text}</p>
    </li>
  );
}

export default BulletPoint;
