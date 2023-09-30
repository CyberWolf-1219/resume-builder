import { UIEvent, useState, useContext, useEffect } from 'react';
import WorkExperienceEntry from './WorkExperienceEntry';
import Button from '../Button';
import { FormDataContext } from '../../../contexts/contexts';
import { WorkExp } from '../../../types';

function WorkExperienceSection() {
  const { updateFormData } = useContext(FormDataContext);
  const [workExperienceDataArray, setWorkExperienceDataArray] = useState<
    WorkExp[]
  >([]);
  const [workExpEntries, setWorkExpEntries] = useState([
    <WorkExperienceEntry
      key={`ed_data_entry_${Math.random()}`}
      entryID={0}
      updateWorkExpArray={setWorkExperienceDataArray}
    />,
  ]);

  useEffect(() => {
    updateFormData({ workExperience: workExperienceDataArray });

    return () => {
      null;
    };
  }, [workExperienceDataArray]);

  const addOneMoreField = (e: UIEvent) => {
    e.preventDefault();
    if (workExpEntries.length >= 3) {
      return;
    }
    setWorkExpEntries((prevVal) => {
      return [
        ...prevVal,
        <WorkExperienceEntry
          key={`ed_data_entry_${Math.random()}`}
          entryID={workExpEntries.length}
          updateWorkExpArray={setWorkExperienceDataArray}
        />,
      ];
    });
  };

  const removeOneField = (e: UIEvent) => {
    e.preventDefault();
    if (workExpEntries.length <= 0) {
      return;
    }
    setWorkExpEntries((prevVal) => {
      const newArray = [...prevVal];
      newArray.pop();

      return newArray;
    });
  };

  return (
    <fieldset
      className={
        'w-full h-fit px-[1rem] py-[0.5rem] flex flex-col items-stretch justify-start gap-[1rem] border-[1px] rounded-[0.25rem]'
      }>
      <legend className={'text-left'}>Work Experience:</legend>
      {workExpEntries}
      <div className={'flex flex-col items-center justify-start gap-[0.25rem]'}>
        <Button
          type={'PRIMARY'}
          action={addOneMoreField}>
          Add One More Field
        </Button>
        <Button
          type={'SECONDARY'}
          action={removeOneField}>
          Remove One Field
        </Button>
      </div>
    </fieldset>
  );
}

export default WorkExperienceSection;
