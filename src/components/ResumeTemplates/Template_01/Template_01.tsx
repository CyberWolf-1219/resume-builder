import React from 'react';
import css from './style.module.css';

import SkillsSection from './SkillsSection/SkillsSection';
import WorkExperienceSection from './WorkExperienceSection/WorkExperienceSection';
import EducationSection from './EducationSection/EducationSection';
// import CoursesSection from './CoursesSection/CoursesSection';
import ProfileSection from './ProfileSection/ProfileSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import PersonalInfoSection from './PersonalInfoSection/PersonalInfoSection';
import ErrorBoundry from '../../ErrorBoundry';
import PersuationSection from './PersuationSection/PersuationSection';

interface Props {
  reference: React.RefObject<HTMLDivElement>;
}

function Template_01({ reference }: Props) {
  return (
    <div
      ref={reference}
      className={`${css.settings} origin-center aspect-[210/297] w-full min-w-[2480px] h-auto mx-auto px-[72px] py-[48px] bg-white text-black`}>
      <PersonalInfoSection />
      <hr className={'my-[1rem]'} />
      <table
        className={`${css.table} w-full h-fit table-fixed border-separate border-spacing-[1rem]`}>
        <tbody>
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
            <EducationSection />
          </ErrorBoundry>

          {/* <ErrorBoundry>
            <CoursesSection />
          </ErrorBoundry> */}

          <ErrorBoundry>
            <ProfileSection />
          </ErrorBoundry>

          <ErrorBoundry>
            <PersuationSection />
          </ErrorBoundry>
        </tbody>
      </table>
    </div>
  );
}

export default Template_01;
