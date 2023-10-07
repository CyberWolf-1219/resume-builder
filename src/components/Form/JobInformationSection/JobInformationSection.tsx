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
  const { data, updateFormData } = useContext(FormDataContext);

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
        'w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[0.5rem] border-[2px] border-blue-950 rounded-[8px]'
      }>
      <legend>Job Information</legend>
      <div className={'w-full h-fit'}>
        <label htmlFor='input_position'>Job Role:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onPositionInputChange}
          required={true}
          type='text'
          name='position'
          id='input_position'
          defaultValue={data.jobInformation.position}
        />
      </div>
      <div className={'w-full h-fit'}>
        <label htmlFor='input_qualification'>
          Why do you think you can handle this job:
        </label>
        <br />
        <textarea
          className={'w-full h-fit'}
          onChange={onQulificationInputChange}
          required={true}
          name='qualification'
          id='input_qualification'
          maxLength={500}
          cols={50}
          rows={8}
          defaultValue={
            data.jobInformation.qualificationExplanation
          }></textarea>
      </div>
    </fieldset>
  );
}

export default JobInformationSection;
