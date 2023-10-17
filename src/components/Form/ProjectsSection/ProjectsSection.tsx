import React, {
  ReactElement,
  UIEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import Button from '../../Button';
import { Project } from '../../../types';
import { FormDataContext } from '../../../contexts/contexts';
import ProjectDataEntry from './ProjectDataEntry';

function ProjectsSection() {
  // COMPONENT STATE ===========================================================
  const { data, updateFormData } = useContext(FormDataContext);
  const [projects, setProjects] = useState<Project[]>(data.projects);
  const projectDataEntriesForCurrentData = data.projects.map((data, i) => {
    return (
      <ProjectDataEntry
        key={`ed_data_entry_${Math.random()}`}
        entryID={i}
        currentData={data}
        updateProjects={setProjects}
      />
    );
  });
  const [projectDataEntries, setProjectDataEntries] = useState<ReactElement[]>(
    projectDataEntriesForCurrentData
  );
  // ===========================================================================

  // UPDATE CONTEXT DATA =======================================================
  useEffect(() => {
    updateFormData({ projects: projects });
  }, [projects]);
  // ===========================================================================

  // BUTTON FUNCTIONS ==========================================================
  const addOneMoreField = (e: UIEvent) => {
    e.preventDefault();

    if (projectDataEntries.length >= 3) {
      return;
    }

    setProjectDataEntries((prevVal) => {
      const data = {
        description: '',
        liveLink: '',
        name: '',
        repoLink: '',
        techStack: [],
      };

      return [
        ...prevVal,
        <ProjectDataEntry
          key={`ed_data_entry_${Math.random()}`}
          entryID={projectDataEntries.length}
          currentData={data}
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
  // ===========================================================================

  return (
    <fieldset
      className={
        'w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[1rem] '
      }>
      <legend>Projects:</legend>
      {projectDataEntries}
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

export default ProjectsSection;
