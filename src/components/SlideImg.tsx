import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Autoplay } from 'swiper';

const SlideImg = () => {
  const arr = ['/bg01.jpg', '/bg02.jpg', '/bg03.jpg'];
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      cssMode={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
      }}
      modules={[Navigation, Autoplay]}
    >
      {arr.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: '100%',
                height: '80vh',
                fontSize: '2rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > img': {
                  objectFit: 'cover',
                  zIndex: -2,
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(4,24,45,0.45)',
                  zIndex: -1,
                },
              }}
            >
              <Image alt="bg01" src={`/bg0${index + 1}.jpg`} fill />
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '3.8rem',
                  maxWidth: '90rem',
                  textAlign: 'center',
                }}
              >
                {' '}
                EASY1 HOLDINGS – HOME SERVICE PLATFORM ĐẦU TIÊN TẠI VIỆT NAM
              </Typography>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideImg;
