import React, { ReactNode, UIEvent } from 'react';

const BUTTON_TYPE = {
  PRIMARY: 'text-white bg-accent/80 border-transparent hover:bg-accent/100',
  SECONDARY:
    'text-accent/80 bg-transparent border-accent/80 hover:text-accent/100 hover:border-accent/100',
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
      className={`w-full h-fit px-[1.4em] pt-[0.5em] pb-[0.55em] font-semibold rounded-md border-[2px] transition-colors duration-[300ms] leading-[1] ${BUTTON_TYPE[type]}`}>
      {children}
    </button>
  );
}

export default Button;
