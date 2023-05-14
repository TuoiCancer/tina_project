import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';
import Layout from '@/components/layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useStore } from '@/store';
import { useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/slide.css';

const RobotoFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { UserSlice } = useStore();
  console.log('is logged in', UserSlice.isLoggedIn);
  useEffect(() => {
    if (UserSlice.isLoggedIn) router.push('/home');
    else router.push('/login');
  }, [UserSlice.isLoggedIn]);
  return (
    <main className={RobotoFont.className}>
      <Layout>
        <Component {...pageProps} />
        <Box
          sx={{
            '& .Toastify': {
              fontSize: '1.6rem',
            },
          }}
        >
          <ToastContainer />
        </Box>
      </Layout>
    </main>
  );
}
