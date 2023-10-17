import React from 'react';

import FormContainer from './FormContainer';
import TemplateContainer from './TemplateContainer';

interface Props {
  gotoPrevStep: () => void;
  gotoNextStep: () => void;
  templateIndex: number;
}

function StepDataEntry({ gotoPrevStep, gotoNextStep, templateIndex }: Props) {
  return (
    <div
      className={`w-full h-full max-h-screen mx-auto flex flex-row overflow-hidden`}>
      <FormContainer
        gotoNextStep={gotoNextStep}
        gotoPrevStep={gotoPrevStep}
      />
      <TemplateContainer templateIndex={templateIndex} />
    </div>
  );
}

export default StepDataEntry;
