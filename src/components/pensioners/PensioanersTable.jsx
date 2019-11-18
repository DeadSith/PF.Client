import React from 'react';
import TableContainer from "../table/TableContainer";
import BaseTable from "../table/BaseTable";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";

const PensionersTable = ({ headCells, handleChangePage, handleChangeRowsPerPage, tableData })  => {
  return (
    <>
    <TableContainer >
      <BaseTable headCells={headCells} rowsData={tableData} orderColumnBy={"name"} />
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={tableData.length}
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