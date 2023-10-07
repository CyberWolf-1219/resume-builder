import React, { useRef, ElementType, UIEvent } from 'react';
import { Resume_Templates } from '../ResumeTemplates';
import TemplatePreviewer from '../TemplatePreviewer';
import Button from '../Form/Button';

interface Props {
  resumeIndexNumber: number;
  goToPrevStep: (e: UIEvent) => void;
}

function StepPreview({ resumeIndexNumber, goToPrevStep }: Props) {
  const template = useRef<ElementType>(Resume_Templates[resumeIndexNumber]);

  return (
    <div className={'relative'}>
      <TemplatePreviewer template={<template.current />} />
      <div
        className={
          'fixed bottom-[50px] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-[0.5rem]'
        }>
        <Button
          type={'SECONDARY'}
          action={goToPrevStep}>
          Back To Form
        </Button>
        <Button
          type={'PRIMARY'}
          action={() => {}}>
          Downlad Resume
        </Button>
      </div>
    </div>
  );
}

export default StepPreview;
