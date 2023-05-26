import React from 'react';
import { Box, Popover, Typography, useMediaQuery } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStore } from '@/store';

import LogoutIcon from '@mui/icons-material/Logout';
import MenuInMobile from './menuMobile';

const NotificationsIcon = styled(NotificationsNoneIcon)({
  marginRight: '2rem',
  fontSize: '2.6rem',
  color: '#DAD9DD',
  transform: 'rotate(-8deg)',
  cursor: 'pointer',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '1.6rem',
    height: '1.6rem',
    backgroundColor: '#0EC9AE',
    borderRadius: '50%',
  },
});

const MailIcon = styled(MailOutlineIcon)({
  marginRight: '2rem',
  fontSize: '2.6rem',
  color: '#DAD9DD',
  cursor: 'pointer',
});

const Header = () => {
  const router = useRouter();
  const { UserSlice } = useStore();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10rem',
        padding: '0 5rem',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          color: '#000000',
          fontSize: '3rem',
          position: 'relative',
          fontStyle: 'italic',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: '#0EC9AE',
            width: '100%',
            height: '0.3rem',
            borderRadius: '0.2rem',
          },
        }}
      >
        Easy1
      </Typography>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          height: '100%',
          '& a': {
            textDecoration: 'none',
            color: '#8b8b8b',
            fontSize: '2rem',
            margin: '0 3rem',
            cursor: 'pointer',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '0.3rem',
              backgroundColor: '#0EC9AE',
              borderRadius: '0.2rem',
              visibility: 'hidden',
            },
            '&.active': {
              fontStyle: 'italic',
              color: '#000',
              '&::after': {
                visibility: 'visible',
              },
            },
          },
        }}
      >
        <Link
          href="/home"
          className={`${router.pathname.includes('home') && 'active'}`}
        >
          Trang chủ
        </Link>
        <Link
          href="/aboutme"
          className={`${router.pathname.includes('aboutme') && 'active'}`}
        >
          {' '}
          Về chúng tôi
        </Link>
        <Link
          href="/contactUs"
          className={`${router.pathname.includes('contactUs') && 'active'}`}
        >
          Liên hệ
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
        }}
      >
        <NotificationsIcon />
        <MailIcon />

        <Box onClick={handleClick} aria-describedby={id}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1677946061345-80328185774c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt="Profile"
            width={50}
            height={50}
            sx={{
              borderRadius: '50%',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem 2rem',
              cursor: 'pointer',
              '& svg': {
                marginRight: '1rem',
                fontSize: '2rem',
              },
              '& p': {
                fontSize: '1.6rem',
              },
            }}
            onClick={() => {
              setAnchorEl(null);
              UserSlice.setIsLoggedIn(false);
            }}
          >
            <LogoutIcon />
            <Typography>Đăng xuất </Typography>
          </Box>
        </Popover>
      </Box>
      {isMobile && <MenuInMobile />}
    </Box>
  );
};

export default Header;
