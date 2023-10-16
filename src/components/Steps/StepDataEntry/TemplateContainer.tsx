import React, { useRef, ElementType } from 'react';
import TemplatePreviewer from '../../TemplatePreviewer';
import { TEMPLATE_ARRAY } from '../../ResumeTemplates/index.tsx';
import ErrorBoundry from '../../ErrorBoundry';

interface Props {
  templateIndex: number;
}

function TemplateContainer({ templateIndex }: Props) {
  const template = useRef<ElementType>(TEMPLATE_ARRAY[templateIndex]);

  return (
    <div className={`relative w-[60%] h-screen max-h-full overflow-hidden`}>
      <div
        className={
          'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full'
        }>
        <ErrorBoundry>
          <TemplatePreviewer template={<template.current />} />
        </ErrorBoundry>
      </div>
    </div>
  );
}

export default TemplateContainer;
