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
      className={`${css.settings} origin-center aspect-[210/297] w-[210mm] print:w-screen h-auto max-h-[297mm] print:max-h-fit mx-auto px-[3%] py-[5%] print:p-[0] bg-white text-black`}>
      <PersonalInfoSection />
      <hr className={'my-[0.5em] border-[0.125em]'} />
      <table className={`${css.table} w-full h-fit table-fixed`}>
        <tbody className={''}>
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
    </div>
  );
}

export default Template_01;
