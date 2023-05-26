import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import Sidebar from './sidebar';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { useStore } from '@/store';
const style = {
  position: 'absolute' as 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  width: 240,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const MenuInMobile = () => {
  const [open, setOpen] = useState(false);
  const { UserSlice } = useStore();
  const router = useRouter();
  const selectedKey = () => {
    switch (router.pathname) {
      case '/home':
        return '1';
      case '/employee':
        return '2';
      case '/finance':
        return '3';
      case '/marketing':
        return '5';
      case '/setup':
        return '6';
      case '/supply':
        return '7';
      case '/humans':
        return '8';
      case '/aboutme':
        return '9';
      case '/contactUs':
        return '10';
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        '& svg': {
          fontSize: '3.2rem',
          cursor: 'pointer',
        },
      }}
    >
      <MenuIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingBottom: '1.6rem',
              '& img': {
                borderRadius: '50%',
                objectFit: 'cover',
              },
              '& h3': {
                fontSize: '1.8rem',
                fontWeight: 'bold',
              },
            }}
          >
            <Typography id="modal-modal-title" variant="h3">
              {UserSlice?.user?.username}
            </Typography>
            <Image
              alt="user"
              src={`https://images.unsplash.com/photo-1684662863663-d25e39fc4c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80`}
              width={60}
              height={60}
            />
          </Box>
          <Box>
            <Sidebar selectedKey={selectedKey()} setOpen={setOpen} />
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                backgroundColor: '#0EC9AE',
                color: '#fff',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                padding: { xs: '1rem 2rem', md: '1.5rem 3rem' },
                margin: { xs: '1rem  auto', md: '2rem 0 0 4rem' },
                cursor: 'pointer',
                textTransform: 'capitalize',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#0EC9AE',
                },
              }}
              onClick={() => {
                UserSlice.setIsLoggedIn(false);
              }}
            >
              Đăng xuất
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default MenuInMobile;
