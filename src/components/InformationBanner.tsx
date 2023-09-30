import React, { ReactNode } from 'react';

const BANNER_TYPES = {
  ERROR: 'bg-red-500/30 border-red-500 text-red-500',
  WARNING: 'bg-yellow-500/30 border-yellow-500 text-yellow-500',
  OK: 'bg-emerald-500/30 border-emerald-500 text-emerald-500',
};

interface Props {
  type: keyof typeof BANNER_TYPES;
  children: ReactNode;
}

function InformationBanner({ type, children }: Props) {
  return (
    <p
      className={`w-full h-fit p-[1rem] font-semibold border-[2px] ${BANNER_TYPES[type]}`}>
      {children}
    </p>
  );
}

export default InformationBanner;
