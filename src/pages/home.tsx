import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
import SlideImg from '@/components/SlideImg';
import Partners from '@/components/Partners';
const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
          padding: { xs: ' 0', md: '4rem 4rem 8rem 4rem ' },
          height: '100%',
        }}
      >
        {!isMobile && <Sidebar selectedKey="1" />}
        <SlideImg />
      </Box>
      <Partners />
    </Box>
  );
};

export default Home;
