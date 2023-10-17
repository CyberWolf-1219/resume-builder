import React from 'react';
import UserDataForm from '../../Form/UserDataForm';

interface Props {
  gotoPrevStep: () => void;
  gotoNextStep: () => void;
}

function FormContainer({ gotoNextStep, gotoPrevStep }: Props) {
  return (
    <div
      className={`w-full max-w-[40%] max-h-full overflow-auto border-[2px] border-white/80 rounded-sm`}>
      <UserDataForm
        onTemplateChangeAction={gotoPrevStep}
        onFormSubmitAction={gotoNextStep}
      />
    </div>
  );
}

export default FormContainer;
