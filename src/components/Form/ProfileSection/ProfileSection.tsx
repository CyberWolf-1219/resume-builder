import { useEffect, useState, useContext, ChangeEvent, useRef } from 'react';
import { FormDataContext } from '../../../contexts/contexts';

function ProfileSection() {
  // COMPONENT STATE ===========================================================
  const { data, updateFormData } = useContext(FormDataContext);
  const [profile, updateProfile] = useState(data.profile);
  const timeout = useRef<number>();
  // ===========================================================================

  // UPDATE CONTEXT STATE ======================================================
  useEffect(() => {
    updateFormData({ profile: profile });

    return () => {
      null;
    };
  }, [profile]);
  // ===========================================================================

  // FUNCTIONS =================================================================
  function onPersonalStatementInput(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const value = (e.currentTarget as HTMLTextAreaElement).value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateProfile(value);
    }, 250);
  }
  // ===========================================================================

  return (
    <fieldset
      className={
        'w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[1rem] '
      }>
      <legend>Sell Yourself</legend>
      <div className={'w-full h-fit'}>
        <label htmlFor='input__applicant_description'>
          Show what you achieved & what you can do:
        </label>
        <br />
        <textarea
          className={'w-full h-fit'}
          onChange={onPersonalStatementInput}
          required={true}
          name='applicant_description'
          id='input__applicant_description'
          cols={60}
          rows={15}
          maxLength={500}
          defaultValue={data.profile}></textarea>
      </div>
    </fieldset>
  );
}

export default ProfileSection;
