import React, { useState } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#E7E7E7',
        padding: '4rem 4rem 8rem 4rem ',
      }}
    >
      <Sidebar selectedKey="1" />
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
          src="https://a.storyblok.com/f/167495/1620x720/ff0312819b/one-on-one-meeting.png"
        />
      </Box>
    </Box>
  );
};

export default Home;
