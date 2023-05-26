import Sidebar from '@/components/sidebar';
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Image from 'next/image';
import React from 'react';

const IntroProto = ({ selectedKey, title, content, imgSrc }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: { xs: '1rem', md: '4rem 4rem 8rem 4rem ' },
        position: 'relative',
      }}
    >
      <Image
        fill
        alt="The Managers Guide to Easy One-on-Ones"
        src="https://easy1.vn/wp-content/uploads/2023/03/line2_doc-03.png"
        objectFit="cover"
        style={{
          zIndex: '-1',
        }}
      />
      {!isMobile && <Sidebar selectedKey={selectedKey} setOpen={() => {}} />}

      <Box>
        <Box
          sx={{
            width: '0.1rem',
            height: '5rem',
            backgroundColor: '#aa8e60',
            margin: '0 auto',
          }}
        />
        <LanguageOutlinedIcon
          sx={{
            fontSize: '3.6rem',
            color: '#aa8e60',
            display: 'block',
            margin: '2rem auto 1rem auto',
          }}
        />
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '2.4rem',
            paddingBottom: '2rem',
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: '10px',
              content: '""',
              display: 'block',
              margin: '7px auto 0 auto',
              height: '2px',
              width: '175px',
              maxWidth: '100%',
              background:
                'linear-gradient(to right,rgba(127,107,74,0.1),#de9926,rgba(170,142,96,0.1))',
            },
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              padding: { xs: '0 1rem', md: '0 4rem' },
              '& p': {
                fontSize: '2rem',
                fontWeight: '300',
                padding: '1rem 0',
              },
            }}
          >
            {content.map((item: any) => {
              return (
                <>
                  &nbsp;<Typography>{item}</Typography>
                </>
              );
            })}
          </Box>
          <Box
            sx={{
              '& img': {
                objectFit: 'cover',
              },
            }}
          >
            <Image
              alt="The Managers Guide to Easy One-on-Ones"
              src={imgSrc}
              width={410}
              height={710}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroProto;
