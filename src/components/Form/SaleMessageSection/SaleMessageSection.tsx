import { useEffect, useState, useContext, ChangeEvent, useRef } from 'react';
import { FormDataContext } from '../../../contexts/contexts';

function SaleMessageSection() {
  const { updateFormData } = useContext(FormDataContext);
  const [personalStatement, updatePersonalStatement] = useState('');

  const timeout = useRef<number>();

  useEffect(() => {
    updateFormData({ professionalStatement: personalStatement });

    return () => {
      null;
    };
  }, [personalStatement]);

  function onPersonalStatementInput(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const value = (e.currentTarget as HTMLTextAreaElement).value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updatePersonalStatement(value);
    }, 250);
  }

  return (
    <fieldset
      className={
        'w-full h-fit px-[1rem] py-[0.5rem] flex flex-col items-stretch justify-start gap-[1rem] border-[1px] rounded-[0.25rem]'
      }>
      <legend className={'text-left'}>Sell Yourself</legend>
      <div className={'text-left'}>
        <label htmlFor='input_applicant-description'>
          Show what you achieved & what you can do:
        </label>
        <br />
        <textarea
          onChange={onPersonalStatementInput}
          required={true}
          name='applicant-description'
          id='input_applicant-description'
          cols={60}
          rows={15}
          maxLength={500}
          className={'w-full h-fit'}
          defaultValue={personalStatement}></textarea>
      </div>
    </fieldset>
  );
}

export default SaleMessageSection;
