import React, { useRef, UIEvent } from 'react';
import TemplatePreviewer from '../../TemplatePreviewer';
import Button from '../../Button.tsx';
import ErrorBoundry from '../../ErrorBoundry';
import { TEMPLATE_ARRAY } from '../../ResumeTemplates/index.tsx';

interface Props {
  templateIndex: number;
  goToPrevStep: () => void;
}

function StepPreview({ templateIndex, goToPrevStep }: Props) {
  const selectedTemplate = useRef(TEMPLATE_ARRAY[templateIndex]);
  const templateElement = useRef(null);

  function buttonClickHandler(e: UIEvent) {
    e.preventDefault();
    window.print();
  }

  return (
    <div className={'relative'}>
      <ErrorBoundry>
        <TemplatePreviewer
          template={<selectedTemplate.current reference={templateElement} />}
        />
      </ErrorBoundry>

      <div
        className={
          'fixed print:hidden bottom-[50px] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-[0.5rem]'
        }>
        <Button
          type={'SECONDARY'}
          action={goToPrevStep}>
          Back To Form
        </Button>
        <Button
          type={'PRIMARY'}
          action={buttonClickHandler}>
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default StepPreview;
