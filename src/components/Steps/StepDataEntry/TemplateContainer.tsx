import React, { useRef, ElementType } from 'react';
import TemplatePreviewer from '../../TemplatePreviewer';
import { Resume_Templates } from '../../ResumeTemplates';

interface Props {
  templateIndex: number;
}

function TemplateContainer({ templateIndex }: Props) {
  const template = useRef<ElementType>(Resume_Templates[templateIndex]);

  return (
    <div className={`relative w-[60%] h-screen max-h-full overflow-hidden`}>
      <div
        className={
          'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
        }>
        <TemplatePreviewer template={<template.current />} />
      </div>
    </div>
  );
}

export default TemplateContainer;
