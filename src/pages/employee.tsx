import React, { useEffect } from 'react';
import { initData } from '@/constants';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import FilterAndSearch from '@/components/Filter and Search';
import TableData from '@/components/Table';
import Sidebar from '@/components/sidebar';

const Employee = () => {
  const [type, setType] = React.useState('Tất cả nhân viên');
  const [department, setDepartment] = React.useState('Tất cả phòng ban');
  const [position, setPosition] = React.useState('Tất cả vị trí');
  const [serachValue, setSearchValue] = React.useState('');
  const [isSearch, setIsSearch] = React.useState(false);
  const [data, setData] = React.useState(initData);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (
      type === 'Tất cả nhân viên' &&
      department === 'Tất cả phòng ban' &&
      position === 'Tất cả vị trí'
    ) {
      setData(initData);
    } else if (
      type === 'Tất cả nhân viên' ||
      department === 'Tất cả phòng ban' ||
      position === 'Tất cả vị trí'
    ) {
      const tmp: any = {
        ...(type !== 'Tất cả nhân viên' && { status: type }),
        ...(department !== 'Tất cả phòng ban' && { department }),
        ...(position !== 'Tất cả vị trí' && { position }),
      };
      const newData = initData.filter((item: any) => {
        for (let key in tmp) {
          if (item[key] !== tmp[key]) {
            return false;
          }
        }
        return true;
      });
      setData(newData);
    } else {
      const newData = initData.filter(
        (item) =>
          item.status === type &&
          item.department === department &&
          item.position === position
      );
      setData(newData);
    }
  }, [type, department, position]);

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
        padding: { xs: '1rem', md: '2rem 4rem ' },
        paddingBottom: '119px',
      }}
    >
      {!isMobile && <Sidebar selectedKey="2" />}

      <Box
        sx={{
          backgroundColor: '#F6F5F8',
          width: { xs: '100%', md: '80%' },
        }}
      >
        <FilterAndSearch
          data={data}
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
