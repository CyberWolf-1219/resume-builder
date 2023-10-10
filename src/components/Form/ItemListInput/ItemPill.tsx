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
        'shrink-0 w-fit h-fit flex flex-row items-center justify-start rounded-sm bg-primary text-secondary font-semibold overflow-hidden'
      }>
      <span className={'w-fit h-fit p-[0.5em] leading-[0.9]'}>{children}</span>
      <button
        onClick={buttonClick}
        className={
          'aspect-[1/1] h-[2em] w-auto bg-white/80 hover:bg-accent hover:text-primary text-black/90 leading-[1]'
        }>
        X
      </button>
    </span>
  );
}

export default ItemPill;
