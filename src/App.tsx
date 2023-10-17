import { ReactElement, useState, useEffect } from 'react';
import './App.css';

import ErrorBoundry from './components/ErrorBoundry';
import StepDataEntry from './components/Steps/StepDataEntry/StepDataEntry';
import StepPreview from './components/Steps/StepPreview/StepPreview';
import { printPrevent } from './helpers';
import StepTemplateSelection from './components/Steps/StepTemplateSelection/StepTemplateSelection';

export function App() {
  const [step, setStep] = useState(0);
  const [resumeTemplateIndex, setResumeTemplateIndex] = useState(1);

  function goToNextStep() {
    setStep((prevStep) => {
      return prevStep + 1;
    });
  }

  function goToPrevStep() {
    setStep((prevStep) => {
      return prevStep - 1;
    });
  }

  function onTemplateSelection(templateIndex: number) {
    setResumeTemplateIndex(templateIndex);
    goToNextStep();
  }

  const STEPS: ReactElement[] = [
    <StepTemplateSelection onTemplateSelect={onTemplateSelection} />,
    <StepDataEntry
      onFormSubmit={goToNextStep}
      templateIndex={resumeTemplateIndex}
    />,
    <StepPreview
      templateIndex={resumeTemplateIndex}
      goToPrevStep={goToPrevStep}
    />,
  ];

  useEffect(() => {
    document.addEventListener('keydown', printPrevent);

    return () => {
      removeEventListener('keypress', printPrevent);
    };
  }, []);

  return (
    <>
      <ErrorBoundry>
        <main className={'w-full h-fit'}>{STEPS[step]}</main>
      </ErrorBoundry>
    </>
  );
}

export default App;
