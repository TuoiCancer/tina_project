import { initData } from '@/constants';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '1rem',
  display: 'flex',
  flexDirection: 'column',
};

const ModalEdit = ({ open, setOpen, employee, setData }: any) => {
  console.log('employee', employee);
  const [name, setName] = React.useState(employee.name);
  const [img, setImg] = React.useState(employee.image);
  const [position, setPosition] = React.useState(employee.position);
  const [department, setDepartment] = React.useState(employee.department);
  const [salary, setSalary] = React.useState(employee.salary);
  const [status, setStatus] = React.useState(
    employee.status === 'Hoạt động' ? true : false
  );

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (!name || !img || !position || !department || !salary) {
      return toast.warn('Please fill all the fields', {
        position: 'top-right',
      });
    }

    setData((prev: any[]) => {
      const index = prev.findIndex((item) => item.id === employee.id);
      prev[index] = {
        ...prev[index],
        name,
        img,
        position,
        department,
        salary,
        status: status ? 'Hoạt động' : 'Nghỉ việc',
      };
      return [...prev];
    });

    setOpen(false);
  };

  return (
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
            textAlign: 'center',
            fontSize: '2.6rem',
            fontWeight: 'bold',
          }}
        ></Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.4rem',
            marginTop: '2rem',
            '& .MuiInputBase-input': {
              fontSize: '1.4rem',
            },
            '& .MuiFormLabel-root': {
              fontSize: '1.4rem',
            },
          }}
        >
          <TextField
            id="name"
            label="Tên nhân viên "
            variant="outlined"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="img"
            label="Hình ảnh"
            variant="outlined"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <TextField
            id="position"
            label="Vị trí"
            variant="outlined"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <Select
            labelId="department"
            id="department"
            value={department}
            label="Phòng ban"
            onChange={(e) => setDepartment(e.target.value)}
          >
            {initData
              .map((item: any) => item.department)
              .map((item: any, index: number) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
          <TextField
            id="salary"
            label="Lương"
            variant="outlined"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
            }
            label="Hoạt động"
            sx={{
              '& .MuiTypography-root': {
                fontSize: '1.4rem',
                userSelect: 'none',
              },
            }}
          />
        </Box>
        <Button
          sx={{
            marginTop: '2rem',
            fontSize: '1.6rem',
            padding: '1rem 2rem',
            backgroundColor: '#0EC9AE',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#0EC9AE',
              opacity: '0.8',
            },
          }}
          onClick={handleSubmit}
        >
          Lưu
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
