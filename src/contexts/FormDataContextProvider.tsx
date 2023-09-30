import { ReactNode, useReducer, useCallback } from 'react';
import { FormDataContext, INITIAL_FORM_DATA } from './contexts';
import { formDataReducer } from './reducers';
import { FormData } from '../types';

interface ContextProviderProps {
  children: ReactNode;
}
function FormDataContextProvider({ children }: ContextProviderProps) {
  const [state, dispatch] = useReducer(formDataReducer, INITIAL_FORM_DATA);

  const updateFormData = useCallback((data: Partial<FormData>) => {
    dispatch({ type: 'UPDATE', data: data });
  }, []);

  return (
    <FormDataContext.Provider
      value={{ data: state, updateFormData: updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export default FormDataContextProvider;
