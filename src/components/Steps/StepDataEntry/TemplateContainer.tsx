import React, { UIEvent, useCallback, useRef } from 'react';
import Template_01 from '../../ResumeTemplates/Template_01/Template_01';

function TemplateContainer() {
  const template = useRef<HTMLDivElement>(null);

  const zoomIn = useCallback((e: UIEvent) => {
    e.preventDefault();
    if (template.current) {
      const currentScale = parseFloat(
        template.current.style.transform.replace(/\(|\)|scale/g, '')
      );
      template.current.style.transform = `scale(${currentScale + 0.1})`;
    }
  }, []);

  const zoomOut = useCallback((e: UIEvent) => {
    e.preventDefault();
    if (template.current) {
      const currentScale = parseFloat(
        template.current.style.transform.replace(/\(|\)|scale/g, '')
      );
      template.current.style.transform = `scale(${currentScale - 0.1})`;
    }
  }, []);

  return (
    <div className={`relative w-[50%] h-screen max-h-full overflow-hidden`}>
      <div className={'absolute inset-0 p-[1rem] overflow-auto'}>
        <Template_01 reference={template} />
      </div>
      <div
        className={
          'absolute bottom-[0.5rem] left-[50%] translate-x-[-50%] w-fit h-fit p-[1rem] flex flex-row items-center justify-center gap-[0.5rem] bg-black/30 rounded-md'
        }>
        <button
          onClick={zoomIn}
          className={`aspect-[1/1] w-[50px] h-auto p-[1rem] leading-[100%] font-bold text-[1.5rem bg-white text-black rounded-md`}>
          +
        </button>
        <button
          onClick={zoomOut}
          className={`aspect-[1/1] w-[50px] h-auto p-[1rem] leading-[100%] font-bold text-[1.5rem bg-white text-black rounded-md`}>
          -
        </button>
      </div>
    </div>
  );
}

export default TemplateContainer;
