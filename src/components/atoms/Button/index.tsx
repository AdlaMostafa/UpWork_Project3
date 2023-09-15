import React ,{ReactNode} from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ text, color, style,textColor,icon, ...props }) {
    return (
      <Button style={style} color={color} {...props}>
        {icon && <span>{icon}</span>}
        <span style={{color:textColor}}>{text}</span>
      </Button>
    );
  }
  