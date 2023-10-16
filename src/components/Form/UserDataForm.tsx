import ErrorBoundry from '../ErrorBoundry';
import PersonalInformationSection from './PersonalInformationSection/PersonalInformationSection';
import JobInformationSection from './JobInformationSection/JobInformationSection';
import EducationInformationSection from './EducationInfromationSection/EducationInformationSection';
import Button from './Button';
import WorkExperienceSection from './WorkExperienceSection/WorkExperienceSection';
import SkillsSection from './SkillSection/SkillsSection';
import Profile from './ProfileSection/ProfileSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import { UIEvent } from 'react';

interface Props {
  onFormSubmit: () => void;
}

function UserDataForm({ onFormSubmit }: Props) {
  function buttonClickHandler(e: UIEvent) {
    e.preventDefault();
    onFormSubmit();
  }

  return (
    <form
      className={`w-full max-w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[2rem] text-left font-[Dosis]`}>
      <ErrorBoundry>
        <PersonalInformationSection />
      </ErrorBoundry>
      <ErrorBoundry>
        <JobInformationSection />
      </ErrorBoundry>
      <ErrorBoundry>
        <EducationInformationSection />
      </ErrorBoundry>
      <ErrorBoundry>
        <WorkExperienceSection />
      </ErrorBoundry>
      <ErrorBoundry>
        <ProjectsSection />
      </ErrorBoundry>
      <ErrorBoundry>
        <SkillsSection />
      </ErrorBoundry>
      <ErrorBoundry>
        <Profile />
      </ErrorBoundry>
      <Button
        action={buttonClickHandler}
        type={'PRIMARY'}>
        Bake My Resume
      </Button>
    </form>
  );
}

export default UserDataForm;
