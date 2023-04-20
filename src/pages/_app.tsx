import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';
import Layout from '@/components/layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';

const RobotoFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
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
