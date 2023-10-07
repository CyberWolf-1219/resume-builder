import { createContext } from "react";
import { FormData } from "../types";

export const INITIAL_FORM_DATA: FormData = {
    personalInformation: {
        userName: 'Lahiru Anjana Rajakaruna',
        mobile: '+9471 065 9280',
        email: 'lahiruanjana@gmail.com',
        address: { country: 'Sri Lanka', city: 'Gotham' },
        linkedInLink: 'https://www.linkedin.com/lahiru-anjana-rajakaruna',
        githubLink: 'https://www.github.com/blackmonkey-1219',
    },
    jobInformation: {
        position: 'Javascript Developer',
        qualificationExplanation: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    },
    workExperience: [ { job: 'Bank Teller', workplace: 'PEOPLES BANK ANURADHAPURA', experience: [ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ] } ],
    projects: [ { name: 'Resume Builder', repoLink: 'https://github.com', liveLink: 'https://netlify.com', techStack: [ 'Typescript', 'React', 'Tailwind', 'Vite', 'Yarn', 'Github Actions' ], description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } ],
    educationInformation: [ {
        degree: 'Highschool Deiploma',
        institute: "ABC Pt. Main",
        highlights: [ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ]
    } ],
    coursesTaken: [],
    skills: { hardSkills: [ 'Typescipt', 'React', 'Javascript', 'Tailwind', 'MongoDB', 'MySQL', 'Prisma', "Firebase", "GoogleAPIs", 'Linux', 'Docker' ], softSkills: [ 'Leadership', 'Team Collaboration', 'Maintained Performance Under Stress', 'Googling' ] },
    profile: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
};

export const FormDataContext = createContext({
    data: INITIAL_FORM_DATA,
    updateFormData: (data: Partial<FormData>) => { },
});
