import React, { useEffect } from 'react';
import { initData } from '@/constants';
import { Box } from '@mui/material';
import FilterAndSearch from '@/components/Filter and Search';
import TableData from '@/components/Table';
import Sidebar from '@/components/sidebar';

const Employee = () => {
  const [type, setType] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [serachValue, setSearchValue] = React.useState('');
  const [isSearch, setIsSearch] = React.useState(false);
  const [data, setData] = React.useState(initData);

  useEffect(() => {
    if (type === 'All employee') {
      setData(initData);
    } else {
      const newData = initData.filter((item) => item.status === type);
      setData(newData);
    }
  }, [type]);

  useEffect(() => {
    if (department === '') {
      setData(initData);
    } else {
      const newData = initData.filter((item) => item.department === department);
      setData(newData);
    }
  }, [department]);

  useEffect(() => {
    if (position === '') {
      setData(initData);
    } else {
      const newData = initData.filter((item) => item.position === position);
      setData(newData);
    }
  }, [position]);

  useEffect(() => {
    if (isSearch) {
      const newData = initData.filter((item) =>
        item.name.toLowerCase().includes(serachValue.toLowerCase())
      );
      setData(newData);
      setIsSearch(false);
    }
  }, [isSearch]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#E7E7E7',
        padding: '2rem 4rem ',
      }}
    >
      <Sidebar selectedKey="2" />
      <Box
        sx={{
          backgroundColor: '#F6F5F8',
          width: '80%',
        }}
      >
        <FilterAndSearch
          type={type}
          serachValue={serachValue}
          setSearchValue={(value: string) => setSearchValue(value)}
          department={department}
          position={position}
          setType={(value: string) => setType(value)}
          setDepartment={(value: string) => setDepartment(value)}
          setPosition={(value: string) => setPosition(value)}
          setData={(value: any) => setData(value)}
          setIsSearch={(value: boolean) => setIsSearch(value)}
        />
        <TableData rows={data} setData={(value: any) => setData(value)} />
      </Box>
    </Box>
  );
};

export default Employee;
