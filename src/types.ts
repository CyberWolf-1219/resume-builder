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
    techStack: [ string, string, string, string, string, string, string, string ];
    challenges: [ string, string, string, string ]
}

export type EducationInfo = {
    degree: string;
    institute: string;
    highlights: string;
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
    jobInformation: JobInformation;
    workExperience: WorkExp[];
    projects: Project[];
    skills: Skills;
    educationInformation: EducationInfo[];
    coursesTaken: CourseInfo[];
    professionalStatement: string;
};