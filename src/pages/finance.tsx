import Sidebar from '@/components/sidebar';
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const Finance = () => {
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
      <Sidebar selectedKey="3" />
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
