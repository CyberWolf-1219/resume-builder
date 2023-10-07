import { ReactElement, useState } from 'react';
import './App.css';

import ErrorBoundry from './components/ErrorBoundry';
import StepDataEntry from './components/Steps/StepDataEntry/StepDataEntry';
import StepPreview from './components/Steps/StepPreview';

export function App() {
  const [resumeTemplateIndex, setResumeTemplateIndex] = useState(0);

  const STEPS: ReactElement[] = [
    <StepDataEntry />,
    <StepPreview resumeIndexNumber={resumeTemplateIndex} />,
  ];

  const [step, setStep] = useState(1);

  return (
    <>
      <ErrorBoundry>
        <main className={'w-full h-fit'}>{STEPS[step]}</main>
      </ErrorBoundry>
    </>
  );
}

export default App;
