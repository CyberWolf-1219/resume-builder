import { ReactElement, useState } from 'react';
import './App.css';

import ErrorBoundry from './components/ErrorBoundry';
import StepDataEntry from './components/Steps/StepDataEntry/StepDataEntry';

const STEPS: ReactElement[] = [<StepDataEntry />];

export function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <ErrorBoundry>
        <main className={'w-full h-fit'}>{STEPS[step]}</main>
      </ErrorBoundry>
    </>
  );
}

export default App;
