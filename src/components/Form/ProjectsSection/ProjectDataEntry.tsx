import React, {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Project } from '../../../types';

interface Props {
  entryID: number;
  currentData: Project;
  updateProjects: React.Dispatch<SetStateAction<Project[]>>;
}

function ProjectDataEntry({ entryID, currentData, updateProjects }: Props) {
  // COMPONENT STATE ===========================================================
  const [projectData, updateProjectData] = useState<Project>(currentData);
  const timeout = useRef<number>();
  // ===========================================================================

  // UPDATE CONTEXT STATE ======================================================
  useEffect(() => {
    updateProjects((prevArray) => {
      const newArray = [...prevArray];
      newArray[entryID] = projectData;
      return newArray;
    });

    return () => {
      null;
    };
  }, [projectData]);
  // ===========================================================================

  // FUNCTIONS =================================================================
  function onNameInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = (e.currentTarget as HTMLInputElement).value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateProjectData((prevData) => {
        const newData = { ...prevData };
        newData.name = value;
        return newData;
      });
    }, 250);
  }

  function onGithubLinkInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = (e.currentTarget as HTMLInputElement).value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateProjectData((prevData) => {
        const newData = { ...prevData };
        newData.repoLink = value;
        return newData;
      });
    }, 250);
  }

  function onLiveLinkInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = (e.currentTarget as HTMLInputElement).value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateProjectData((prevData) => {
        const newData = { ...prevData };
        newData.liveLink = value;
        return newData;
      });
    }, 250);
  }

  function onDesciptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();

    const value = (e.currentTarget as HTMLTextAreaElement).value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateProjectData((prevData) => {
        const newData = { ...prevData };
        newData.description = value;
        return newData;
      });
    }, 250);
  }
  // ===========================================================================

  return (
    <div
      className={
        'w-full h-fit flex flex-col items-stretch justify-start gap-[0.5rem]'
      }>
      <div className={'w-full h-fit'}>
        <label htmlFor='input__project_name'>Project Name:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onNameInput}
          type='text'
          id='input__project_name'
        />
      </div>
      <div className={'w-full h-fit'}>
        <label htmlFor='input__github_link'>Github Link:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onGithubLinkInput}
          type='url'
          id='input__github_link'
        />
      </div>
      <div className={'w-full h-fit'}>
        <label htmlFor='input__live_link'>Live Link:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onLiveLinkInput}
          type='url'
          id='input__live_link'
        />
      </div>
      <div className={'w-full h-fit'}>
        <label htmlFor='input__description'>Live Link:</label>
        <br />
        <textarea
          className={'w-full h-fit'}
          onChange={onDesciptionChange}
          id='input__description'
        />
      </div>
    </div>
  );
}

export default ProjectDataEntry;
