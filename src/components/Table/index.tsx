import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material';

import React from 'react';

import RowItem from './RowItem';

const headCells = [
  {
    id: 'image',
    numeric: false,
    disablePadding: true,
    label: '',
  },
  {
    id: 'employee',
    numeric: false,
    disablePadding: false,
    label: 'Employee',
  },
  {
    id: 'position',
    numeric: false,
    disablePadding: false,
    label: 'Position',
  },
  {
    id: 'department',
    numeric: false,
    disablePadding: false,
    label: 'Department',
  },
  {
    id: 'salary',
    numeric: false,
    disablePadding: false,
    label: 'Salary',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'setting',
    numeric: false,
    disablePadding: false,
    label: 'Setting',
  },
];

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: string, orderBy: string) {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props: {
  order: any;
  orderBy: any;
  onRequestSort: any;
}) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: '#f5f5f5',
          '& .MuiTableCell-root': {
            fontSize: '1.6rem',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
        }}
      >
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function stableSort(
  array: any[],
  comparator: { (a: any, b: any): number; (arg0: any, arg1: any): any }
) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: number[], b: number[]) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any[]) => el[0]);
}

const TableData = ({ rows, setData }: any) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('employee');
  const [selected, setSelected] = React.useState<any>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: any,
    property: React.SetStateAction<string>
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: { target: { checked: any } }) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: { name: any }) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: any) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%', paddingTop: '2rem' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected?.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: React.Key | null | undefined) => (
                  <RowItem
                    key={index}
                    row={row}
                    listRow={rows}
                    setData={setData}
                  />
                ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default TableData;
