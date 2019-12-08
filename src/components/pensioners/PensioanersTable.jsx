import React from 'react';
import TableContainer from "../table/TableContainer";
import BaseTable from "../table/BaseTable";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";

const PensionersTable = ({ headCells, tableData })  => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <TableContainer >
      <BaseTable headCells={headCells} rowsData={tableData} orderColumnBy={"name"} />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  </>)
};

export default PensionersTable;