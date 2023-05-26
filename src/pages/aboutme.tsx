import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Poppins } from '@next/font/google';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const AboutMe = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 600,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '1rem', md: '4rem 6rem 8rem 6rem' },
        marginTop: { Xs: '0', md: '2rem' },
        flexDirection: { xs: 'column-reverse', md: 'row' },
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
      <Box
        sx={{
          flex: 1.5,
          paddingRight: { xs: '0', md: '4rem' },
          marginTop: { xs: '2rem', md: '0' },
        }}
      >
        <Typography
          className={PoppinsFont.className}
          variant="h3"
          sx={{
            fontWeight: '700',
            paddingBottom: { xs: '1rem', md: '4rem' },
            fontSize: { xs: '2.4rem', md: '3.2rem' },
          }}
        >
          GIỚI THIỆU VỀ EASY1 HOLDINGS
        </Typography>
        <Box
          sx={{
            '& p': {
              fontSize: '1.6rem',
              fontWeight: '300',
              margin: '1rem 0',
            },
          }}
        >
          <Typography>
            EASY1 HOLDINGS – HOME SERVICE PLATFORM ĐẦU TIÊN TẠI VIỆT NAM
          </Typography>
          <Typography>
            Easy1 Holdings là một Hệ sinh thái đa lĩnh vực.
          </Typography>
          <Typography>
            Sở hữu Big data cùng Mô hình kinh doanh vô cùng độc đáo, khác biệt,
            với những ý tưởng táo bạo, đột phá của đội ngũ Founder, được triển
            khai bởi các C-levels dày dặn kinh nghiệm, vô cùng nhiệt huyết và hệ
            thống nhân sự trẻ sáng tạo, dám nghĩ, dám làm, luôn sẵn sàng đương
            đầu với những khó khăn & thử thách mới. Vì thế, trong lộ trình của
            mình, Easy1 đang phát triển mạnh và đồng đều cả về Cơ chế thị trường
            & Cơ chế vốn.
          </Typography>
          <Typography>
            Khát vọng của Easy1 là trở thành Kỳ lân của Việt Nam vào năm 2027.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 500,
          position: 'relative',
          flex: 1,
        }}
      >
        <Image
          alt="The Managers Guide to Easy One-on-Ones"
          fill
          src="https://easy1.vn/wp-content/uploads/2023/02/pic1.jpg"
          objectFit="cover"
          style={{
            borderRadius: '1rem',
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutMe;
