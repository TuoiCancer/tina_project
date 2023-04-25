import React from 'react';
import { Box, Popover, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStore } from '@/store';

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

  React.useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);

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
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          '& a': {
            textDecoration: 'none',
            color: '#8b8b8b',
            fontSize: '2rem',
            marginRight: '3.2rem',
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
          Home
        </Link>
        <Link
          href="/aboutme"
          className={`${router.pathname.includes('aboutme') && 'active'}`}
        >
          {' '}
          About Us
        </Link>
        <Link
          href="/contactUs"
          className={`${router.pathname.includes('contactUs') && 'active'}`}
        >
          Contact
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
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
          sx={{
            '& .MuiPaper-root': {
              padding: '1rem 2rem',
            },
            '& a': {
              textDecoration: 'none',
              color: '#8b8b8b',
              fontSize: '2rem',
              cursor: 'pointer',
              '&:hover': {
                color: '#000',
              },
            },
          }}
        >
          <Box>
            <Link
              href="/login"
              onClick={() => {
                setAnchorEl(null);
                UserSlice.setIsLoggedIn(false);
              }}
            >
              Log out
            </Link>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default Header;
