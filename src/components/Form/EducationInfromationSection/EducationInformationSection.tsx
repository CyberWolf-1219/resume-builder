import { ReactElement, UIEvent, useContext, useEffect, useState } from 'react';
import EducationDataEntry from './EducationDataEntry';
import Button from '../../Button';
import { EducationInfo } from '../../../types';
import { FormDataContext } from '../../../contexts/contexts';

function EducationInformationSection() {
  // COMPONENT STATE ===========================================================
  const { data, updateFormData } = useContext(FormDataContext);
  const [localEducationDataArray, setLocalEducationDataArray] = useState<
    EducationInfo[]
  >(data.educationInformation);
  const edDataEntriesForCurrentData = data.educationInformation.map(
    (edData, i) => {
      return (
        <EducationDataEntry
          key={`ed_data_entry_${Math.random()}`}
          entryID={i}
          updateEducationDataArray={setLocalEducationDataArray}
        />
      );
    }
  );
  const [edDataEntries, setEdDataEntries] = useState<ReactElement[]>(
    edDataEntriesForCurrentData
  );
  // ===========================================================================

  // UPDATE CONTEXT STATE ======================================================
  useEffect(() => {
    updateFormData({ educationInformation: localEducationDataArray });
  }, [localEducationDataArray]);
  // ===========================================================================

  // BUTTON FUNCTIONS ==========================================================
  const addOneMoreField = (e: UIEvent) => {
    e.preventDefault();

    if (edDataEntries.length >= 3) {
      return;
    }

    setEdDataEntries((prevVal) => {
      return [
        ...prevVal,
        <EducationDataEntry
          key={`ed_data_entry_${Math.random()}`}
          entryID={edDataEntries.length}
          updateEducationDataArray={setLocalEducationDataArray}
        />,
      ];
    });
  };

  const removeOneField = (e: UIEvent) => {
    e.preventDefault();

    if (edDataEntries.length <= 0) {
      return;
    }

    setEdDataEntries((prevVal) => {
      const newArray = [...prevVal];
      newArray.pop();
      return newArray;
    });
  };
  // ===========================================================================

  return (
    <fieldset
      className={
        'w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[1rem] '
      }>
      <legend>Education Information</legend>
      {edDataEntries}
      <div
        className={
          'w-full h-fit flex flex-col items-stretch justify-start gap-[0.5rem]'
        }>
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

export default EducationInformationSection;
