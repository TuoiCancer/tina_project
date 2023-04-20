import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      <Image
        fill
        src="https://easy1.vn/wp-content/uploads/2023/03/footer-e1678776662575.png"
        alt="footer"
        objectFit="cover"
        style={{
          zIndex: '-1',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          color: 'white',
          padding: '2rem 20rem 3rem 4rem',
          '& h5': {
            fontSize: '1.5rem',
            padding: '0.4rem 0',
          },
          '&  h3': {
            fontSize: '2rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            paddingBottom: '2rem',
          },
        }}
      >
        <Image
          src="https://easy1.vn/wp-content/uploads/2023/03/Asset-1-4.png"
          alt="logo"
          width={180}
          height={200}
          objectFit="cover"
        />
        <Box>
          <Typography variant="h3">Easy1 Holdings</Typography>
          <Box>
            <Typography variant="h5">
              Địa chỉ: 123 Trần Hưng Đạo, Phường 5, Quận 5, TP. Hồ Chí Minh
            </Typography>
            <Typography variant="h5">Email: info@easy1.vn </Typography>
            <Typography variant="h5">Hotline: 1900 29 29 59</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3">Hỗ trợ</Typography>
          <Typography variant="h5">Nội bộ</Typography>
        </Box>
        <Box>
          <Typography variant="h3">QUICK LINK</Typography>
          <Typography variant="h5">Giới thiệu</Typography>
          <Typography variant="h5">Tuyển dụng</Typography>
          <Typography variant="h5">Liên hệ</Typography>
        </Box>
        <Box>
          <Typography variant="h3">KẾT NỐI VỚI EASY1</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '& svg': {
                fontSize: '2.6rem',
                cursor: 'pointer',
              },
            }}
          >
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
