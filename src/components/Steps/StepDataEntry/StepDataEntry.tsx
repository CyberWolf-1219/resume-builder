import React from 'react';

import FormContainer from './FormContainer';
import TemplateContainer from './TemplateContainer';

function StepDataEntry() {
  return (
    <div
      className={`w-full h-full max-h-screen mx-auto flex flex-row overflow-hidden`}>
      <FormContainer />
      <TemplateContainer />
    </div>
  );
}

export default StepDataEntry;
