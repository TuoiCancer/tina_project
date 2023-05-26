import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ItemContact = ({ icon, title, description }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: { xs: '1rem 0', md: '1rem' },
        '& svg': {
          fontSize: '2.4rem',
          marginRight: '1.2rem',
        },
      }}
    >
      {icon}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '1.6rem',
            marginRight: '1.2rem',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.6rem',
            fontWeight: '300',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemContact;
