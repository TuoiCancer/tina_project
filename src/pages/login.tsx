import { Box, Button, TextField, Typography } from '@mui/material';
import { Poppins, Roboto } from '@next/font/google';
import Image from 'next/image';
import React, { useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useStore } from '@/store';
import { useRouter } from 'next/router';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const RobotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { UserSlice } = useStore();
  const router = useRouter();

  const handleSubmit = async () => {
    if (username === '' || password === '') {
      return toast.warn('Please enter your username and password');
    }
    await axios
      .post('/api/user', {
        username,
        password,
      })
      .then((res: any) => {
        toast.success('Login success');
        UserSlice.setUser(res.data);
        UserSlice.setIsLoggedIn(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: 'space-between',
        '& h1,h2,h3,p': {
          fontFamily: 'Poppins',
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          padding: { xs: '2rem', md: '4rem' },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#000000',
              fontSize: '3rem',
              position: 'relative',
              fontStyle: 'italic',
              display: 'inline',

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
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: { xs: '100%', md: '80%' },
          }}
        >
          <Typography
            className={RobotoFont.className}
            sx={{
              fontSize: '2rem',
              color: '#000000',
              margin: { xs: '1rem 0 ', md: '1rem 0 4rem  0' },
              fontFamily: 'Roboto !important',
            }}
          >
            Chào mừng bạn đến với Easy1, hãy đăng nhập để tiếp tục
          </Typography>
          <Typography
            sx={{
              fontSize: '1.5rem',
              color: '#000000',
              margin: { xs: '1rem', md: '4rem 0 1rem 0' },
              fontWeight: '600',
            }}
          >
            Tên đăng nhập
          </Typography>
          <TextField
            placeholder="x@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              width: '100%',
              borderRadius: '1rem',
              border: '1px solid #0EC9AE',
              '& input': {
                fontSize: '1.6rem',
              },

              '& fieldset': {
                border: 'none',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '1.5rem',
              color: '#000000',
              margin: '4rem 0 1rem 0',
              fontWeight: '600',
            }}
          >
            Mật khẩu
          </Typography>

          <Box
            sx={{
              flex: 1,
              width: '100%',
              position: 'relative',
              '& svg': {
                position: 'absolute',
                top: '36%',
                right: '4%',
                cursor: 'pointer',
                fontSize: '2rem',
              },
            }}
          >
            <TextField
              placeholder="*********"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                width: '100%',
                fontSize: '1.6rem',
                borderRadius: '1rem',
                border: '1px solid #0EC9AE',
                '& input': {
                  fontSize: '1.6rem',
                },
                '& fieldset': {
                  border: 'none',
                },
              }}
            />
            {!showPassword ? (
              <VisibilityOffIcon
                sx={{
                  color: '#ccc',
                }}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityIcon onClick={() => setShowPassword(!showPassword)} />
            )}
          </Box>

          <Button
            onClick={handleSubmit}
            sx={{
              width: '100%',
              height: '5rem',
              borderRadius: '1rem',
              backgroundColor: '#0EC9AE',
              color: '#fff',
              marginTop: '4rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#0EC9AE',
                opacity: 0.8,
              },
            }}
          >
            Đăng nhập
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: { xs: '180px', md: '100vh' },
          position: 'relative',
          flex: { md: 1.5 },
          '& img': {
            objectFit: 'cover',
            borderRadius: { xs: '0', md: '1rem' },
          },
        }}
      >
        <Image src="/bg.jpg" alt="bg" fill />
      </Box>
    </Box>
  );
};

export default Login;
