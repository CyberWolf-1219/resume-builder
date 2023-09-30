import { KeyboardEvent, useContext, useEffect, useState } from 'react';
import SkillPill from './SkillPill';
import { FormDataContext } from '../../../contexts/contexts';

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

  function onHardSkillEnter(e: KeyboardEvent<HTMLInputElement>) {
    console.log(e);
    if (e.key.toLowerCase() == 'enter') {
      const value = (e.target as HTMLInputElement).value;
      (e.target as HTMLInputElement).value = '';

      setHardSkills((prevValue) => {
        return [...prevValue, value];
      });
    }
  }

  function onSoftSkillEnter(e: KeyboardEvent<HTMLInputElement>) {
    console.log(e);
    if (e.key.toLowerCase() == 'enter') {
      const value = (e.target as HTMLInputElement).value;
      (e.target as HTMLInputElement).value = '';

      setSoftSkills((prevValue) => {
        return [...prevValue, value];
      });
    }
  }

  return (
    <fieldset
      className={
        'w-full h-fit px-[1rem] py-[0.5rem] pb-[1rem] flex flex-col items-stretch justify-start gap-[1rem] border-[1px] rounded-[0.25rem]'
      }>
      <legend className={'text-left'}>Skills</legend>
      {/* ADD FILED SET TO ENTER HARD SKILLS */}
      <div className={'text-left'}>
        <label htmlFor='input_hard-skills'>Hard Skills:</label>
        <br />
        <div
          className={
            'w-full h-fit min-h-[50px] mb-[0.25rem] p-[1rem] flex flex-row items-center justify-start gap-[0.5rem] flex-wrap bg-black border-[2px] border-gray-300'
          }>
          {hardSkills.map((skill, i) => {
            return (
              <SkillPill key={`hard_skill_${i}_${Math.random()}`}>
                {skill}
              </SkillPill>
            );
          })}
        </div>
        <input
          onKeyDown={onHardSkillEnter}
          type='text'
          name='hard_skill'
          id='input__hard_skills'
          className={'w-full'}
        />
      </div>
      {/* ADD FIELDSET TO ENTER SOFT SKILLS */}
      <div className={'text-left'}>
        <label htmlFor='input__soft-skills'>Soft Skills:</label>
        <br />
        <div
          className={
            'w-full h-fit min-h-[50px] mb-[0.25rem] p-[1rem] flex flex-row items-center justify-start gap-[0.5rem] flex-wrap bg-black border-[2px] border-gray-300'
          }>
          {softSkills.map((skill, i) => {
            return (
              <SkillPill key={`soft_skill_${i}_${Math.random()}`}>
                {skill}
              </SkillPill>
            );
          })}
        </div>
        <input
          onKeyDown={onSoftSkillEnter}
          type='text'
          name='soft_skill'
          id='input__soft_skills'
          className={'w-full'}
        />
      </div>
    </fieldset>
  );
}

export default SkillsSection;
