import ErrorBoundry from '../ErrorBoundry';
import PersonalInformationSection from './PersonalInformationSection/PersonalInformationSection';
import JobInformationSection from './JobInformationSection/JobInformationSection';
import EducationInformationSection from './EducationInfromationSection/EducationInformationSection';
import WorkExperienceSection from './WorkExperienceSection/WorkExperienceSection';
import SkillsSection from './SkillSection/SkillsSection';
import Profile from './ProfileSection/ProfileSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ButtonGroup from './ButtonGroup/ButtonGroup';

interface Props {
  onTemplateChangeAction: () => void;
  onFormSubmitAction: () => void;
}

function UserDataForm({ onTemplateChangeAction, onFormSubmitAction }: Props) {
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
      <ErrorBoundry>
        <ButtonGroup
          onFormSubmitAction={onFormSubmitAction}
          onTemplateChangeAction={onTemplateChangeAction}
        />
      </ErrorBoundry>
    </form>
  );
}

export default UserDataForm;
