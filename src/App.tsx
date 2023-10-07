import { ReactElement, useState, UIEvent } from 'react';
import './App.css';

import ErrorBoundry from './components/ErrorBoundry';
import StepDataEntry from './components/Steps/StepDataEntry/StepDataEntry';
import StepPreview from './components/Steps/StepPreview';

export function App() {
  const [step, setStep] = useState(0);
  const [resumeTemplateIndex, setResumeTemplateIndex] = useState(0);

  function goToNextStep(e: UIEvent) {
    e.preventDefault();
    setStep((prevStep) => {
      return prevStep + 1;
    });
  }

  function goToPrevStep(e: UIEvent) {
    e.preventDefault();
    setStep((prevStep) => {
      return prevStep - 1;
    });
  }

  const STEPS: ReactElement[] = [
    <StepDataEntry
      onFormSubmit={goToNextStep}
      templateIndex={resumeTemplateIndex}
    />,
    <StepPreview
      resumeIndexNumber={resumeTemplateIndex}
      goToPrevStep={goToPrevStep}
    />,
  ];

  return (
    <>
      <ErrorBoundry>
        <main className={'w-full h-fit'}>{STEPS[step]}</main>
      </ErrorBoundry>
    </>
  );
}

export default App;
