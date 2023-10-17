import Button from '../../Button';
import { UIEvent } from 'react';

interface Props {
  onFormSubmitAction: () => void;
  onTemplateChangeAction: () => void;
}

function ButtonGroup({ onTemplateChangeAction, onFormSubmitAction }: Props) {
  function submitButtonHandler(e: UIEvent) {
    e.preventDefault();
    onFormSubmitAction();
  }
  function templateChangeButtonhandler(e: UIEvent) {
    e.preventDefault();
    onTemplateChangeAction();
  }

  return (
    <div>
      <Button
        action={templateChangeButtonhandler}
        type={'SECONDARY'}>
        Change Template
      </Button>
      <Button
        action={submitButtonHandler}
        type={'PRIMARY'}>
        Bake My Resume
      </Button>
    </div>
  );
}

export default ButtonGroup;
