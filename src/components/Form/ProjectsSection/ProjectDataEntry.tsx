import React, {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Project } from '../../../types';
import ItemListInput from '../ItemListInput/ItemListInput';

interface Props {
  entryID: number;
  updateProjects: React.Dispatch<SetStateAction<Project[]>>;
}

function ProjectDataEntry({ entryID, updateProjects }: Props) {
  const [projectData, updateProjectData] = useState<Project>({
    name: '',
    repoLink: '',
    liveLink: '',
    techStack: [],
    challenges: [],
  });

  const timeout = useRef<number>();

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

  function onTechPush(techstack: string[]) {
    updateProjectData((prevData) => {
      const newData = { ...prevData };
      newData.techStack = techstack;
      return newData;
    });
  }

  function onChallengePush(challenges: string[]) {
    updateProjectData((prevData) => {
      const newData = { ...prevData };
      newData.challenges = challenges;
      return newData;
    });
  }

  return (
    <div className={'text-left'}>
      <div className={'mb-[0.5rem]'}>
        <label htmlFor='input__project_name'>Project Name:</label>
        <br />
        <input
          onChange={onNameInput}
          type='text'
          id='input__project_name'
          className={'w-full h-fit'}
        />
      </div>
      <div className={'mb-[0.5rem]'}>
        <label htmlFor='input__github_link'>Github Link:</label>
        <br />
        <input
          onChange={onGithubLinkInput}
          type='url'
          id='input__github_link'
          className={'w-full h-fit'}
        />
      </div>
      <div className={'mb-[0.5rem]'}>
        <label htmlFor='input__live_link'>Live Link:</label>
        <br />
        <input
          onChange={onLiveLinkInput}
          type='url'
          id='input__live_link'
          className={'w-full h-fit'}
        />
      </div>
      <ItemListInput
        title={'Techstack (8)'}
        onItemAdd={onTechPush}
      />
      <ItemListInput
        title={'Challenges (3)'}
        onItemAdd={onChallengePush}
      />
    </div>
  );
}

export default ProjectDataEntry;
