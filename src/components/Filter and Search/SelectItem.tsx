import { MenuItem, Select } from '@mui/material';
import React from 'react';

const SelectItem = ({ state, setState, values, placeholder }: any) => {
  const handleChange = (event: any) => {
    setState(event.target.value);
  };
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={state}
      onChange={handleChange}
      placeholder={placeholder}
      sx={{
        fontSize: '1.2rem',
        marginRight: '2rem',
      }}
    >
      {values.map((value: any, i: number) => (
        <MenuItem key={i} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectItem;
