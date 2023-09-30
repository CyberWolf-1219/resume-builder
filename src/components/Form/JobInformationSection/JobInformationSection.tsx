import {
  useCallback,
  useRef,
  ChangeEvent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { JobInformation } from '../../../types';
import { FormDataContext } from '../../../contexts/contexts';

function JobInformationSection() {
  const { updateFormData } = useContext(FormDataContext);

  const [jobInformation, updateJobInformation] = useState<JobInformation>({
    position: '',
    qualificationExplanation: '',
  });

  const timeout = useRef<number>();

  useEffect(() => {
    updateFormData({ jobInformation: jobInformation });
  }, [jobInformation]);

  const onPositionInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = e.currentTarget.value;

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        updateJobInformation((prevState) => {
          const newState = { ...prevState };
          newState.position = value;
          return newState;
        });
      }, 250);
    },
    []
  );

  const onQulificationInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const value = e.currentTarget.value;

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        updateJobInformation((prevState) => {
          const newState = { ...prevState };
          newState.qualificationExplanation = value;
          return newState;
        });
      }, 250);
    },
    []
  );

  return (
    <fieldset
      className={
        'w-full h-fit px-[1rem] py-[0.5rem] flex flex-col items-stretch justify-start gap-[1rem] border-[1px] rounded-[0.25rem]'
      }>
      <legend className={'text-left'}>Job Information</legend>
      <div className={'text-left'}>
        <label htmlFor='input_position'>Job Role:</label>
        <br />
        <input
          onChange={onPositionInputChange}
          required={true}
          type='text'
          name='position'
          id='input_position'
        />
      </div>
      <div className={'text-left'}>
        <label htmlFor='input_qualification'>
          Why do you think you can handle this job:
        </label>
        <br />
        <textarea
          onChange={onQulificationInputChange}
          required={true}
          name='qualification'
          id='input_qualification'
          maxLength={500}
          cols={60}
          rows={8}
          className={'w-full'}></textarea>
      </div>
    </fieldset>
  );
}

export default JobInformationSection;
