import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckboxLabelsProps {
  label: string;
  fontSize: string;
}

const CheckboxLabels: React.FC<CheckboxLabelsProps> = ({ label, fontSize }) => {
  const labelStyle: React.CSSProperties = {
    fontSize: fontSize,
  };

  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          marginLeft: "1px",
        }}
        control={<Checkbox defaultChecked color="success" />}
        label={<span style={labelStyle}>{label}</span>}
      />
    </FormGroup>
  );
};

export default CheckboxLabels;
