import { useContext, useEffect, useState } from 'react';
import { FormDataContext } from '../../../contexts/contexts';
import ItemListInput from '../ItemListInput/ItemListInput';

function SkillsSection() {
  const { updateFormData } = useContext(FormDataContext);

  const [hardSkills, setHardSkills] = useState<string[]>([]);
  const [softSkills, setSoftSkills] = useState<string[]>([]);

  useEffect(() => {
    updateFormData({
      skills: { hardSkills: hardSkills, softSkills: softSkills },
    });

    return () => {
      null;
    };
  }, [hardSkills, softSkills]);

  function onHardSkillEnter(skillsList: string[]) {
    setHardSkills(skillsList);
  }

  function onSoftSkillEnter(skillList: string[]) {
    setSoftSkills(skillList);
  }

  return (
    <fieldset
      className={
        'w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[1rem] border-[2px] border-blue-950 rounded-[8px]'
      }>
      <legend>Skills</legend>
      {/* ADD FILED SET TO ENTER HARD SKILLS */}
      <ItemListInput
        title={'Hard Skills'}
        onItemAdd={onHardSkillEnter}
      />
      {/* ADD FIELDSET TO ENTER SOFT SKILLS */}
      <ItemListInput
        title={'Soft Skills'}
        onItemAdd={onSoftSkillEnter}
      />
    </fieldset>
  );
}

export default SkillsSection;
