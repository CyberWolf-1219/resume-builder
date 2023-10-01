import React, { ReactNode, UIEvent } from 'react';

interface Props {
  index: number;
  children: ReactNode;
  removeHandler: (index: number) => void;
}

function ItemPill({ index, children, removeHandler }: Props) {
  function buttonClick(e: UIEvent) {
    e.preventDefault();
    removeHandler(index);
  }
  return (
    <span
      className={
        'shrink-0 w-fit max-w-[300px] max-h-[3rem] h-fit flex flex-row items-stretch justify-start rounded-sm bg-white/80 text-black/80 leading-[1] font-semibold overflow-hidden'
      }>
      <span
        className={
          'w-fit max-w-full h-fit px-[0.75rem] pt-[0.5rem] pb-[0.5rem] truncate'
        }>
        {children}
      </span>
      <button
        onClick={buttonClick}
        className={
          'aspect-[1/1] h-fit min-h-[2rem] max-h-[3rem] w-auto bg-white/80 hover:bg-black hover:text-white text-black/90 leading-[1]'
        }>
        X
      </button>
    </span>
  );
}

export default ItemPill;
