import React, { UIEvent } from 'react';

import FormContainer from './FormContainer';
import TemplateContainer from './TemplateContainer';

interface Props {
  onFormSubmit: (e: UIEvent) => void;
  templateIndex: number;
}

function StepDataEntry({ onFormSubmit, templateIndex }: Props) {
  return (
    <div
      className={`w-full h-full max-h-screen mx-auto flex flex-row overflow-hidden`}>
      <FormContainer onFormSubmit={onFormSubmit} />
      <TemplateContainer templateIndex={templateIndex} />
    </div>
  );
}

export default StepDataEntry;
