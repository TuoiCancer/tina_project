import React from 'react';
import { Box, Typography } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';

const Partners = () => {
  const listPartners = [
    '/company01.png',
    '/company02.png',
    '/company03.png',
    '/company04.png',
    '/company05.png',
    '/company06.png',
  ];
  return (
    <Box
      sx={{
        paddingBottom: '4rem',
      }}
    >
      <Typography
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '4rem 0',
          position: 'relative',
          color: '#fff',
          '&::after': {
            position: 'absolute',
            content: '""',
            left: 0,
            right: 0,
            bottom: '24px',
            display: 'block',
            margin: '7px auto 0 auto',
            height: '2px',
            width: '175px',
            maxWidth: '100%',
            background:
              '-webkit-linear-gradient(left, rgba(170,142,96,0.1),#aa8e60,rgba(170,142,96,0.1))',
          },
        }}
      >
        ĐỐI TÁC
      </Typography>
      <Swiper
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{
          width: '50%',
          padding: '2rem 0 6rem 0',
          textAlign: 'center',
        }}
      >
        {listPartners.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image alt="bg01" src={item} width={100} height={100} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Partners;
