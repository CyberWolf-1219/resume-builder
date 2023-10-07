import React, { ReactNode, useRef, useEffect } from 'react';

interface Props {
  template: ReactNode;
}

function TemplatePreviewer({ template }: Props) {
  const zoomPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('wheel', (e) => {
      if (e.deltaY < 0) {
        console.log('ZOOM IN');
        if (zoomPanel.current) {
          const currentZoom = parseFloat(zoomPanel.current.style.scale);
          const newZoom = currentZoom + 0.005;
          zoomPanel.current.style.scale = newZoom.toString();
        }
      } else {
        console.log('ZOOM OUT');
        if (zoomPanel.current) {
          const currentZoom = parseFloat(zoomPanel.current.style.scale);
          const newZoom = currentZoom - 0.005;
          zoomPanel.current.style.scale = newZoom.toString();
        }
      }
    });

    return () => {
      document.removeEventListener('wheel', () => {});
    };
  });

  return (
    <>
      <div className={'print:hidden'}>
        <div
          ref={zoomPanel}
          style={{ scale: '0.1' }}
          className={'relative'}>
          <div
            className={
              'absolute index-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit h-fit'
            }>
            {template}
          </div>
        </div>
      </div>
      <div className={'hidden print:block'}>{template}</div>
    </>
  );
}

export default TemplatePreviewer;
