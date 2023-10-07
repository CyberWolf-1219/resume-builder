export type PersonalInformation = {
    userName: string;
    mobile: string;
    email: string;
    address: {
        city: string
        country: string
    };
    githubLink: string;
    linkedInLink: string;
};

export type Skills = {
    hardSkills: string[];
    softSkills: string[];
};

export type WorkExp = {
    job: string;
    workplace: string;
    experience: string[];
};

export type Project = {
    name: string;
    repoLink: string;
    liveLink: string;
    techStack: string[];
    description: string;
}

export type EducationInfo = {
    degree: string;
    institute: string;
    highlights: string[];
};

export type CourseInfo = {
    name: string;
    institute: string;
}

export type JobInformation = {
    position: string;
    qualificationExplanation: string

}

export type FormData = {
    personalInformation: PersonalInformation;
    workExperience: WorkExp[];
    projects: Project[];
    skills: Skills;
    educationInformation: EducationInfo[];
    coursesTaken: CourseInfo[];
    profile: string;
    jobInformation: JobInformation;
};