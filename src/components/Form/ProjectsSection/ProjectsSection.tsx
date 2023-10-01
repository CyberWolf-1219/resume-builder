import React, {
  ReactElement,
  UIEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import Button from '../Button';
import { Project } from '../../../types';
import { FormDataContext } from '../../../contexts/contexts';
import ProjectDataEntry from './ProjectDataEntry';

function ProjectsSection() {
  const { updateFormData } = useContext(FormDataContext);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectDataEntries, setProjectDataEntries] = useState<ReactElement[]>([
    <ProjectDataEntry
      key={`ed_data_entry_${Math.random()}`}
      entryID={0}
      updateProjects={setProjects}
    />,
  ]);

  useEffect(() => {
    updateFormData({ projects: projects });
  }, [projects]);

  const addOneMoreField = (e: UIEvent) => {
    e.preventDefault();
    if (projectDataEntries.length >= 3) {
      return;
    }
    setProjectDataEntries((prevVal) => {
      return [
        ...prevVal,
        <ProjectDataEntry
          key={`ed_data_entry_${Math.random()}`}
          entryID={projectDataEntries.length}
          updateProjects={setProjects}
        />,
      ];
    });
  };

  const removeOneField = (e: UIEvent) => {
    e.preventDefault();
    if (projectDataEntries.length <= 0) {
      return;
    }
    setProjectDataEntries((prevVal) => {
      const newArray = [...prevVal];
      newArray.pop();

      return newArray;
    });
  };

  return (
    <fieldset
      className={
        'w-full h-fit px-[1rem] py-[0.5rem] pb-[1rem] flex flex-col items-stretch justify-start gap-[1rem] border-[1px] rounded-[0.25rem]'
      }>
      <legend className={'text-left'}>Projects:</legend>
      {projectDataEntries}
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

export default ProjectsSection;
