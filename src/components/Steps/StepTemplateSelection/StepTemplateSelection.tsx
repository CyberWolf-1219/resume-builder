import React from 'react';
import TemplateTile from './TemplateTile/TemplateTile';
import { TEMPLATE_ARRAY } from '../../ResumeTemplates';
import ErrorBoundry from '../../ErrorBoundry';

interface Props {
  onTemplateSelect: (templateIndex: number) => void;
}

function StepTemplateSelection({ onTemplateSelect }: Props) {
  return (
    <>
      <h1 className={'my-[2rem]'}>Please Select a Template</h1>
      <div
        className={
          'w-full max-w-[1024px] h-fit mx-auto p-[1rem] grid grid-cols-3  items-center justify-center gap-[1rem] bg-secondary rounded-md'
        }>
        <ErrorBoundry>
          {TEMPLATE_ARRAY.map((template, i) => {
            return (
              <TemplateTile
                key={`template_tile_${i}_${Math.random()}`}
                template={template}
                tempalteIndex={i}
                selectAction={onTemplateSelect}
              />
            );
          })}
        </ErrorBoundry>
      </div>
    </>
  );
}

export default StepTemplateSelection;
