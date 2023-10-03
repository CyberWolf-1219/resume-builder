import React from 'react';
import UserDataForm from '../../Form/UserDataForm';

function FormContainer() {
  return (
    <div
      className={`w-full max-w-[40%] max-h-full overflow-auto border-[2px] border-white/80 rounded-sm`}>
      <UserDataForm />
    </div>
  );
}

export default FormContainer;
