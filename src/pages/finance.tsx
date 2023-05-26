import Sidebar from '@/components/sidebar';
import React from 'react';
import { Box, useMediaQuery, useTheme, useThemeProps } from '@mui/material';
import Image from 'next/image';

const Finance = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#E7E7E7',
        padding: '2rem 4rem ',
      }}
    >
      {!isMobile && <Sidebar selectedKey="3" />}

      <Box
        sx={{
          width: '80%',
          height: 600,
          position: 'relative',
        }}
      >
        <Image
          fill
          alt="The Managers Guide to Easy One-on-Ones"
          src="https://media.tapchitaichinh.vn/images/upload/hoangthuviet/04172020/toi-da-hoa-doanh-thu-1280x720.png"
        />
      </Box>
    </Box>
  );
};

export default Finance;
