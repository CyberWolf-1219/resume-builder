import React, {
  SetStateAction,
  useState,
  useEffect,
  ChangeEvent,
  useRef,
} from 'react';
import { WorkExp } from '../../../types';

interface Props {
  entryID: number;
  updateWorkExpArray: React.Dispatch<SetStateAction<WorkExp[]>>;
}

function WorkExperienceEntry({ entryID, updateWorkExpArray }: Props) {
  const [workExpData, updateWorkExpData] = useState<WorkExp>({
    job: '',
    workplace: '',
    experience: [],
  });
  const timeout = useRef<number>();

  useEffect(() => {
    updateWorkExpArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[entryID] = workExpData;
      return newArray;
    });

    return () => {
      null;
    };
  }, [workExpData]);

  function onJobPositionInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const element = e.currentTarget as HTMLInputElement;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      const value = element.value;
      updateWorkExpData((prevData) => {
        const newData = { ...prevData };
        newData.job = value;
        return newData;
      });
    }, 250);
  }

  function onWorkplaceInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const element = e.currentTarget as HTMLInputElement;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      const value = element.value;
      updateWorkExpData((prevData) => {
        const newData = { ...prevData };
        newData.workplace = value;
        return newData;
      });
    }, 250);
  }

  function onExpInput(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const element = e.currentTarget as HTMLTextAreaElement;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      const value = element.value;
      updateWorkExpData((prevData) => {
        const newData = { ...prevData };
        newData.experience = value.split('\n');
        return newData;
      });
    }, 250);
  }

  return (
    <div>
      <div className={'mb-[0.5rem] text-left'}>
        <label htmlFor={`input__job-role`}>Job Role:</label>
        <br />
        <input
          onChange={onJobPositionInput}
          type='text'
          name={`job-role`}
          id={`input__job-role`}
          defaultValue={workExpData.job}
        />
      </div>
      <div className={'mb-[0.5rem] text-left'}>
        <label htmlFor={`input__workplace`}>Workplace:</label>
        <br />
        <input
          onChange={onWorkplaceInput}
          type='text'
          name={`workplace`}
          id={`input__workplace`}
          defaultValue={workExpData.workplace}
        />
      </div>
      <div className={'mb-[0.5rem] text-left'}>
        <label htmlFor={`input__achievements`}>Achievements/Experience:</label>
        <br />
        <textarea
          onChange={onExpInput}
          name={`achievements`}
          id={`input__achievements`}
          maxLength={250}
          cols={60}
          rows={5}
          className={'w-full'}
          defaultValue={workExpData.experience}></textarea>
      </div>
    </div>
  );
}

export default WorkExperienceEntry;
