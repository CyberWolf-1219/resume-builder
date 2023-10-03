import React, {
  ChangeEvent,
  useState,
  useRef,
  SetStateAction,
  useEffect,
} from 'react';

import { EducationInfo } from '../../../types';

interface Props {
  entryID: number;
  updateEducationDataArray: React.Dispatch<SetStateAction<EducationInfo[]>>;
}
function EducationDataEntry({ entryID, updateEducationDataArray }: Props) {
  const [educationData, updateEducationData] = useState<EducationInfo>({
    degree: '',
    institute: '',
    highlights: [],
  });
  const timeout = useRef<number>();

  useEffect(() => {
    updateEducationDataArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[entryID] = educationData;
      return newArray;
    });
  }, [educationData]);

  function onDegreeUpdate(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateEducationData((prevState) => {
        const newState = { ...prevState };
        newState.degree = value;
        return newState;
      });
    }, 500);
  }

  function onInstituteUpdate(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateEducationData((prevState) => {
        const newState = { ...prevState };
        newState.institute = value;
        return newState;
      });
    }, 500);
  }

  function onHighlightsUpdate(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateEducationData((prevState) => {
        const newState = { ...prevState };
        newState.highlights = [...value.split('\n').slice(0, 3)];
        return newState;
      });
    }, 500);
  }

  return (
    <div
      className={
        'w-full h-fit flex flex-col items-stretch justify-start gap-[0.5rem]'
      }>
      <div className={'w-full h-fit'}>
        <label htmlFor={`input_degree`}>Degree Name:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onDegreeUpdate}
          required={true}
          type='text'
          name={`degree`}
          id={`input_degree`}
          defaultValue={educationData.degree}
        />
      </div>
      <div className={'w-full h-fit'}>
        <label htmlFor={`input_institute`}>Institute:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onInstituteUpdate}
          required={true}
          type='text'
          name={`institute`}
          id={`input_institute`}
          defaultValue={educationData.institute}
        />
      </div>
      <div className={'w-full h-fit'}>
        <label htmlFor={`input_highlights`}>Achievements:</label>
        <br />
        <textarea
          className={'w-full h-fit'}
          onChange={onHighlightsUpdate}
          required={true}
          name={`highlights`}
          id={`input_highlights`}
          maxLength={300}
          cols={60}
          rows={10}
          defaultValue={educationData.highlights}></textarea>
      </div>
    </div>
  );
}

export default EducationDataEntry;
