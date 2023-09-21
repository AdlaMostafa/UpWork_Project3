import React from 'react';
import { StyledParent4 } from './style';
import EditableAlertDialog from '../../../GirdSections/EditPop/EditSkillsDialog';

const FourthGridSection: React.FC = () => {
  return (
    <StyledParent4>
      <div className='title'>
        <h3>Skills</h3>
        <div><EditableAlertDialog/></div>
      </div>
    </StyledParent4>
  );
}

export default FourthGridSection;
