import React, { forwardRef, ReactNode } from 'react';
import css from './style.module.css';

interface Props {
  children: ReactNode[];
}

const Paper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      ref={ref}
      className={`${css.settings} origin-center aspect-[210/297] w-[210mm] print:w-screen h-auto max-h-[297mm] print:max-h-fit mx-auto px-[3%] py-[5%] print:p-[0] bg-white text-black`}>
      {props.children}
    </div>
  );
});

export default Paper;
