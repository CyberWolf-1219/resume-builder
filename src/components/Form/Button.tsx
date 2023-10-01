import React, { ReactNode, UIEvent } from 'react';

const BUTTON_TYPE = {
  PRIMARY: 'bg-blue-900 border-transparent',
  SECONDARY: 'bg-transparent border-blue-900',
};

interface Props {
  children: ReactNode;
  action: (e: UIEvent) => void;
  type: keyof typeof BUTTON_TYPE;
}

function Button({ children, action, type }: Props) {
  return (
    <button
      autoFocus={false}
      onClick={action}
      className={`w-full h-fit px-[1.5rem] pt-[0.6rem] pb-[0.75rem] rounded-md border-[2px] ${BUTTON_TYPE[type]}`}>
      {children}
    </button>
  );
}

export default Button;
