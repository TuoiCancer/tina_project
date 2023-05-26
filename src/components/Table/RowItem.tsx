import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TableCell,
  TableRow,
} from '@mui/material';
import React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { styled } from '@mui/material/styles';
import ModalEdit from './ModelEdit';

const RowItem = ({ row, listRow, setData }: any) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const deleteEmp = (idEmp: any) => {
    const newRows = listRow.filter((row: { id: any }) => row.id !== idEmp);
    setData(newRows);
    handleClose();
  };

  const EditIcon = styled(EditOutlinedIcon)({
    color: '#3f51b5',
    fontSize: '2rem',
    cursor: 'pointer',
  });

  const DeleteIcon = styled(DeleteOutlineOutlinedIcon)({
    color: '#f44336',
    fontSize: '2rem',
    cursor: 'pointer',
  });

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.name}
      sx={{
        '& .MuiTableCell-root': {
          fontSize: '1.4rem',
          textAlign: 'center',
          borderBottom: 'none',
          padding: { xs: '1rem', md: '1rem 0' },
        },
      }}
    >
      <TableCell
        component="th"
        scope="row"
        padding="none"
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        <Box
          component="img"
          src={row.image}
          alt="avatar"
          width={60}
          height={60}
          sx={{
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </TableCell>
      <TableCell
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {row.name}
      </TableCell>
      <TableCell
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {row.position}
      </TableCell>
      <TableCell
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {row.department}
      </TableCell>
      <TableCell>{row.salary} $</TableCell>
      <TableCell>
        {row.status === 'Hoạt động' || row.status === 'hoạt động'
          ? 'Hoạt động'
          : 'Nghỉ việc'}
      </TableCell>
      <TableCell
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            cursor: 'pointer',
          },
        }}
      >
        <EditIcon
          onClick={() => {
            setOpenModal(true);
          }}
        />
        <Box>|</Box>
        <DeleteIcon onClick={() => setOpenDialog(true)} />
      </TableCell>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {'Bạn có chắc chắn muốn xóa ? '}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Hủy bỏ </Button>
          <Button onClick={() => deleteEmp(row.id)} autoFocus>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
      {openModal && (
        <ModalEdit
          open={openModal}
          setOpen={(value: boolean | ((prevState: boolean) => boolean)) =>
            setOpenModal(value)
          }
          employee={row}
          setData={setData}
        />
      )}
    </TableRow>
  );
};

export default RowItem;
