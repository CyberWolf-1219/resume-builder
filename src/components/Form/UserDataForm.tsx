import ErrorBoundry from '../ErrorBoundry';
import PersonalInformationSection from './PersonalInformationSection/PersonalInformationSection';
import JobInformationSection from './JobInformationSection/JobInformationSection';
import EducationInformationSection from './EducationInfromationSection/EducationInformationSection';
import Button from './Button';
import WorkExperienceSection from './WorkExperienceSection/WorkExperienceSection';
import SkillsSection from './SkillSection/SkillsSection';
import SaleMessageSection from './SaleMessageSection/SaleMessageSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';

function UserDataForm() {
  return (
    <form
      className={
        'w-full h-fit p-[1rem] flex flex-col items-stretch justify-start gap-[1rem]'
      }>
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
        <SaleMessageSection />
      </ErrorBoundry>
      <Button
        action={() => {}}
        type={'SECONDARY'}>
        Bake My Resume
      </Button>
    </form>
  );
}

export default UserDataForm;
