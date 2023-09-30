import React from 'react';

interface Props {
  text: string;
}

function Bulletpoint({ text }: Props) {
  return <li>{text}</li>;
}

export default Bulletpoint;
