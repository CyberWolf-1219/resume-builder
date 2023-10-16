import React from 'react';
import UserDataForm from '../../Form/UserDataForm';

interface Props {
  onFormSubmit: () => void;
}

function FormContainer({ onFormSubmit }: Props) {
  return (
    <div
      className={`w-full max-w-[40%] max-h-full overflow-auto border-[2px] border-white/80 rounded-sm`}>
      <UserDataForm onFormSubmit={onFormSubmit} />
    </div>
  );
}

export default FormContainer;
