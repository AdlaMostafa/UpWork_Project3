import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize() {
  const customStyle = {
    color: 'green', // Change this to your desired color
  };

  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" style={customStyle} />
    </Stack>
  );
}
