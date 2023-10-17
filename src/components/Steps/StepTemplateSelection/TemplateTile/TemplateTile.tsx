import React, { ElementType, UIEvent, useRef } from 'react';

interface Props {
  template: ElementType;
  tempalteIndex: number;
  selectAction: (templateIndex: number) => void;
}

function TemplateTile({ template, tempalteIndex, selectAction }: Props) {
  const templateElement = useRef(template);
  function buttonClickHandler(e: UIEvent) {
    e.preventDefault();
    selectAction(tempalteIndex);
  }

  return (
    <div className='relative aspect-[210/297] w-full h-auto group/template-tile rounded-sm overflow-hidden'>
      {/* BUTTON PANEL */}
      <div
        className={
          'absolute top-[0] left-[0] z-[10] w-full h-full flex flex-col items-center justify-center bg-secondary-light rounded-sm translate-y-[100%] group-hover/template-tile:translate-y-[0] duration-[250ms] delay-[250ms]'
        }>
        <button
          onClick={buttonClickHandler}
          className={
            'w-fit h-fit px-[1em] pt-[0.6em] pb-[0.5em] font-semibold bg-accent/80 text-primary rounded-sm hover:bg-accent/100 transition-colors duration-[250ms]'
          }>
          SELECT
        </button>
      </div>

      {/* TEMPLATE WRAPPER */}
      <div
        style={{ scale: '0.395' }}
        className={'w-fit h-fit origin-top-left'}>
        <templateElement.current />
      </div>
    </div>
  );
}

export default TemplateTile;
