import React from 'react';
import { Box, Button, Input, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { styled } from '@mui/material/styles';
import SelectItem from './SelectItem';
import ModalItem from './Modal';

const Search = styled(SearchIcon)({
  marginRight: '1.2rem',
  fontSize: '3rem',
  color: '#CCCBD2',
  cursor: 'pointer',
});

const FilterAndSearch = ({
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
          backgroundColor: '#E7E7E7',
          padding: '2rem 4rem ',
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
          placeholder="Seach by name..."
          sx={{
            fontSize: '1.6rem',
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
          padding: '2rem 4rem',
        }}
      >
        <Box>
          <SelectItem
            state={type}
            setState={(value: any) => setType(value)}
            values={['All employee', 'Active', 'Archived']}
            placeholder="All employee"
          />
          <SelectItem
            state={department}
            setState={(value: any) => setDepartment(value)}
            values={[
              'Marketing',
              'Design',
              'Android',
              'Backend',
              'Frontend',
              'Development',
            ]}
            placeholder="All employee"
          />
          <SelectItem
            state={position}
            setState={(value: any) => setPosition(value)}
            values={[
              'Backend Developer',
              'Frontend Developer',
              'Sorftware Engineer',
              'Project Manager',
              'Bussiness Analyst',
              'Sale',
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
            padding: '1.5rem 3rem',
            margin: '2rem 0 0 4rem',
            '&:hover': {
              backgroundColor: '#0EC9AE',
            },
            cursor: 'pointer',
            textTransform: 'lowercase',
          }}
          onClick={() => setOpenModal(true)}
        >
          Add Employee
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
