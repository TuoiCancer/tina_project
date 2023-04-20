import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import ItemContact from '@/components/ItemContact';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import Loading from '@/components/Loading';
import NearMeIcon from '@mui/icons-material/NearMe';
import Link from 'next/link';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #CCC',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [content, setContent] = React.useState('');

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: 600,
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          padding: ' 7rem ',
          marginTop: '2rem',
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            margin: '0 12rem',
            '& .MuiFormControl-root': {
              width: '100%',
              marginBottom: '1.6rem',
              backgroundColor: 'white',
              '& .MuiInputBase-root': {
                '& input, textarea': {
                  fontSize: '1.6rem',
                },
              },
              '& label': {
                fontSize: '1.4rem',
              },
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              fontSize: '2.8rem',
              marginBottom: '2.4rem',
            }}
          >
            Liên hệ ngay với chúng tôi
          </Typography>
          <TextField
            label="Họ và tên"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Số điện thoại"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <TextField
            label="Nội dung"
            multiline
            rows={4}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Button
            variant="contained"
            sx={{
              fontSize: '1.6rem',
              padding: '1rem 3.2rem',
              marginLeft: 'auto',
            }}
            onClick={() => {
              if (!name || !email || !phone || !content) {
                toast.warn('Vui lòng điền đầy đủ thông tin');
                return;
              }
              setName('');
              setEmail('');
              setPhone('');
              setContent('');

              handleOpen();
            }}
          >
            Gửi
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontSize: '2rem',
                }}
              >
                Cảm ơn bạn đã liên hệ
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontSize: '1.2rem' }}
              >
                Chúng tôi sẽ liên lạc lại sớm nhất có thể.
              </Typography>
            </Box>
          </Modal>
        </Box>
        <Box
          sx={{
            width: '100%',
            // flex: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '800',
              fontSize: '2.8rem',
              marginBottom: '1.2rem',
            }}
          >
            CÔNG TY CỔ PHẦN EASY1 HOLDINGS
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '300',
              marginBottom: '2.4rem',
              fontSize: '1.4rem',
            }}
          >
            Easy1 Holdings Joint Stock Company
          </Typography>
          <Box
            sx={{
              paddingTop: '2rem',
            }}
          >
            <ItemContact
              icon={<LocationOnIcon />}
              title="Địa chỉ:"
              description="108 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội"
            />
            <ItemContact
              icon={<SmartphoneIcon />}
              title="SĐT:"
              description="1900.29.29.59"
            />

            <ItemContact
              icon={<EmailIcon />}
              title="Email:"
              description="info@easy1.vn"
            />
            <ItemContact
              icon={<LanguageIcon />}
              title="Website:"
              description="www.easy1.vn"
            />
          </Box>
        </Box>
      </Box>
      {/* Map */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            padding: '2rem 4rem',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '800',
              fontSize: '2rem',
              marginBottom: '1.2rem',
              whiteSpace: 'nowrap',
            }}
          >
            CÔNG TY CỔ PHẦN EASY1 HOLDINGS
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '300',
              marginBottom: '2.4rem',
              fontSize: '1.4rem',
            }}
          >
            Easy1 Holdings Joint Stock Company
          </Typography>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '1rem',
                '& svg': {
                  fontSize: '2.4rem',
                  marginRight: '1.2rem',
                },
              }}
            >
              <NearMeIcon />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.6rem',
                    fontWeight: '300',
                  }}
                >
                  Số 108 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà
                  Nội
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '1rem',
                '& svg': {
                  fontSize: '2.4rem',
                  marginRight: '1.2rem',
                },
              }}
            >
              <LanguageIcon />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& a': {
                    fontSize: '1.6rem',
                    fontStyle: 'italic',
                    textDecoration: 'underline',
                    color: 'blue',
                    fontWeight: '300',
                  },
                }}
              >
                <Link href={'https://www.easy1.vn'}>www.easy1.vn</Link>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '1rem',
                '& svg': {
                  fontSize: '2.4rem',
                  marginRight: '1.2rem',
                },
              }}
            >
              <EmailIcon />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.6rem',
                    fontWeight: '300',
                  }}
                >
                  info@easy1.vn
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.108428349077!2d105.78313867605459!3d21.028347087791236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c5275f79b%3A0xfa056890236b3684!2zMTA4IFAuIEThu4tjaCBW4buNbmcgSOG6rXUsIEThu4tjaCBW4buNbmcgSOG6rXUsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1682007841050!5m2!1svi!2s"
          width="100%"
          height="600"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default ContactUs;
