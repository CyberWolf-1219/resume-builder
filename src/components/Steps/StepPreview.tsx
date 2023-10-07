import React, { useRef, ElementType } from 'react';
import { Resume_Templates } from '../ResumeTemplates';
import TemplatePreviewer from '../TemplatePreviewer';

interface Props {
  resumeIndexNumber: number;
}

function StepPreview({ resumeIndexNumber }: Props) {
  const template = useRef<ElementType>(Resume_Templates[resumeIndexNumber]);

  return <TemplatePreviewer template={<template.current />} />;
}

export default StepPreview;
