import React from 'react';

import SkillsSection from './SkillsSection/SkillsSection';
import WorkExperienceSection from './WorkExperienceSection/WorkExperienceSection';
import EducationSection from './EducationSection/EducationSection';
// import CoursesSection from './CoursesSection/CoursesSection';
import ProfileSection from './ProfileSection/ProfileSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import PersonalInfoSection from './PersonalInfoSection/PersonalInfoSection';
import ErrorBoundry from '../../ErrorBoundry';
import PersuationSection from './PersuationSection/PersuationSection';
import Paper from '../Paper/Paper';

interface Props {
  reference?: React.RefObject<HTMLDivElement>;
}

function Template_01({ reference }: Props) {
  return (
    <Paper ref={reference}>
      <PersonalInfoSection />
      <hr className={'my-[0.5em] border-[0.125em]'} />
      <table className={'w-full h-fit table-fixed'}>
        <tbody>
          <ErrorBoundry>
            <WorkExperienceSection />
          </ErrorBoundry>
          <tr>
            <td colSpan={2}>
              <hr className={'my-[0.5em] border-[0.125em] '} />
            </td>
          </tr>
          <ErrorBoundry>
            <ProjectsSection />
          </ErrorBoundry>
          <tr>
            <td colSpan={2}>
              <hr className={'my-[0.5em] border-[0.125em] '} />
            </td>
          </tr>
          <ErrorBoundry>
            <SkillsSection />
          </ErrorBoundry>
          <tr>
            <td colSpan={2}>
              <hr className={'my-[0.5em] border-[0.125em] '} />
            </td>
          </tr>
          <ErrorBoundry>
            <EducationSection />
          </ErrorBoundry>
          <tr>
            <td colSpan={2}>
              <hr className={'my-[0.5em] border-[0.125em] '} />
            </td>
          </tr>
          {/* <ErrorBoundry>
            <CoursesSection />
          </ErrorBoundry> */}

          <ErrorBoundry>
            <ProfileSection />
          </ErrorBoundry>
          <tr>
            <td colSpan={2}>
              <hr className={'my-[0.5em] border-[0.125em] '} />
            </td>
          </tr>
          <ErrorBoundry>
            <PersuationSection />
          </ErrorBoundry>
        </tbody>
      </table>
    </Paper>
  );
}

export default Template_01;
