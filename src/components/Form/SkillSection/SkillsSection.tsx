import { useContext, useEffect, useState } from 'react';
import { FormDataContext } from '../../../contexts/contexts';
import ItemListInput from '../ItemListInput/ItemListInput';

function SkillsSection() {
  // COMPONENT STATE ==========================================================
  const { data, updateFormData } = useContext(FormDataContext);
  const [hardSkills, setHardSkills] = useState<string[]>(
    data.skills.hardSkills
  );
  const [softSkills, setSoftSkills] = useState<string[]>(
    data.skills.softSkills
  );
  // ===========================================================================

  // UPDATE CONTEXT DATA =======================================================
  useEffect(() => {
    updateFormData({
      skills: { hardSkills: hardSkills, softSkills: softSkills },
    });

    return () => {
      null;
    };
  }, [hardSkills, softSkills]);
  // ===========================================================================

  // BUTTON FUNCTIONS ==========================================================
  function onHardSkillEnter(skillsList: string[]) {
    setHardSkills(skillsList);
  }

  function onSoftSkillEnter(skillList: string[]) {
    setSoftSkills(skillList);
  }
  // ===========================================================================

  return (
    <fieldset
      className={
        'w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[1rem] '
      }>
      <legend>Skills</legend>
      {/* ADD FILED SET TO ENTER HARD SKILLS */}
      <ItemListInput
        title={'Hard Skills'}
        currentItems={hardSkills}
        onItemAdd={onHardSkillEnter}
      />
      {/* ADD FIELDSET TO ENTER SOFT SKILLS */}
      <ItemListInput
        title={'Soft Skills'}
        currentItems={softSkills}
        onItemAdd={onSoftSkillEnter}
      />
    </fieldset>
  );
}

export default SkillsSection;
