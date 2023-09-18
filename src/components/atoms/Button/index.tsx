import React, { ReactNode } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  text: string;
  textColor?: string;
  icon?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, color, style, textColor, icon, ...props }) => {
  return (
    <Button style={style} color={color} {...props}>
      {icon && <span>{icon}</span>}
      <span style={{ color: textColor }}>{text}</span>
    </Button>
  );
}

export default CustomButton;
