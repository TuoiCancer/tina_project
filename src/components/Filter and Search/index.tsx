import React from 'react';
import { Box, Button, Input, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { styled } from '@mui/material/styles';
import SelectItem from './SelectItem';
import ModalItem from './Modal';
import { initData } from '@/constants';

const Search = styled(SearchIcon)({
  marginRight: '1.2rem',
  fontSize: '3rem',
  color: '#CCCBD2',
  cursor: 'pointer',
});

const FilterAndSearch = ({
  data,
  type,
  serachValue,
  setSearchValue,
  department,
  position,
  setType,
  setDepartment,
  setPosition,
  setData,
  setIsSearch,
}: any) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <Box>
      {/* Search bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#575757',
          padding: { xs: '2rem 1rem', md: '2rem 4rem ' },
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
        }}
      >
        <Search onClick={() => setIsSearch(true)} />
        <Input
          value={serachValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setIsSearch(true);
            }
          }}
          placeholder="Nhập tên nhân viên ..."
          sx={{
            fontSize: '1.6rem',
            color: '#fff',

            '&::before, &::after': {
              borderBottom: 'none',
            },
            '&:hover': {
              '&::before, &::after': {
                borderBottom: 'none !important',
              },
            },
          }}
        />
      </Box>
      {/* Filter and Add employee Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '1rem', md: '2rem 4rem' },
          '& .MuiInputBase-root': {
            marginTop: { xs: '1.2rem', md: '0' },
          },
        }}
      >
        <Box>
          <SelectItem
            state={type}
            setState={(value: any) => setType(value)}
            values={['Tất cả nhân viên', 'Hoạt động', 'Nghỉ việc']}
          />
          <SelectItem
            state={department}
            setState={(value: any) => setDepartment(value)}
            values={[
              'Tất cả phòng ban',
              ...[...new Set(initData?.map((item: any) => item.department))],
            ]}
          />
          <SelectItem
            state={position}
            setState={(value: any) => setPosition(value)}
            values={[
              'Tất cả vị trí',
              ...[...new Set(initData?.map((item: any) => item.position))],
            ]}
            placeholder="All employee"
          />
        </Box>
        <Button
          sx={{
            backgroundColor: '#0EC9AE',
            color: '#fff',
            fontSize: '1.6rem',
            fontWeight: 'bold',
            padding: { xs: '1rem 2rem', md: '1.5rem 3rem' },
            margin: { xs: '0', md: '2rem 0 0 4rem' },
            cursor: 'pointer',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#0EC9AE',
            },
          }}
          onClick={() => setOpenModal(true)}
        >
          Thêm nhân viên
        </Button>
      </Box>
      <ModalItem
        open={openModal}
        setOpen={(value: any) => setOpenModal(value)}
        setData={(newData: any) => setData(newData)}
      />
    </Box>
  );
};

export default FilterAndSearch;
