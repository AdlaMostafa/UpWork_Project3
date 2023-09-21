import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import { StyledButton } from './style';

interface CopyLinkTextFieldProps {
  link: string;
}

const CopyLinkTextField: React.FC<CopyLinkTextFieldProps> = ({ link }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div>
      <TextField
        inputRef={inputRef}
        variant="outlined"
        fullWidth
        value={link}
        readOnly
      />
      <StyledButton onClick={handleCopyClick} style={{
        fontSize: '16px',
        marginTop: '10px',
        color: 'green',
        cursor: 'pointer'
      }}>
        Copy Link
      </StyledButton>
    </div>
  );
};

export default CopyLinkTextField;
