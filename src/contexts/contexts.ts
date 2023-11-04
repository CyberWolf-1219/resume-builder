import { createContext } from "react";
import { FormData } from "../types";

export const INITIAL_FORM_DATA: FormData = {
    personalInformation: {
        userName: '',
        mobile: '',
        email: '',
        address: {
            country: '',
            city: ''
        },
        linkedInLink: '',
        githubLink: '',
    },
    jobInformation: {
        position: '',
        qualificationExplanation: ``
    },
    workExperience: [
        {
            job: '',
            workplace: '',
            experience: [ '' ]
        }
    ],
    projects: [
        {
            name: '',
            repoLink: '',
            liveLink: '',
            bulletpoints: []
        }
    ],
    educationInformation: [
        {
            degree: '',
            institute: "",
            highlights: []
        }
    ],
    coursesTaken: [],
    skills: {
        hardSkills: [],
        softSkills: []
    },
    profile: ``,
};

export const FormDataContext = createContext({
    data: INITIAL_FORM_DATA,
    updateFormData: (data: Partial<FormData>) => { },
});
