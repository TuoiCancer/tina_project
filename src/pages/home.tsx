import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
import SlideImg from '@/components/SlideImg';
import Partners from '@/components/Partners';
const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        '& > img': {
          objectFit: 'cover',
          zIndex: -1,
        },
      }}
    >
      <Image src="/home.jpg" alt="home" fill />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '4rem 4rem 8rem 4rem ',
          height: '100%',
        }}
      >
        <Sidebar selectedKey="1" />
        <SlideImg />
      </Box>
      <Partners />
    </Box>
  );
};

export default Home;
