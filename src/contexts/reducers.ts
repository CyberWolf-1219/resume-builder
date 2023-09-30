import { FormData } from "../types";

type ReducerAction = {
    type: 'UPDATE';
    data: Partial<FormData>;
}
export function formDataReducer(prevState: FormData, action: ReducerAction) {

    console.log(action.data)
    const newData = action.data

    return { ...prevState, ...newData };
}