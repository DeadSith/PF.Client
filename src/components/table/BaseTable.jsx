import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableHeader from "./TableHeader";
import { desc, stableSort, getSorting} from "./TableUtils";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function BaseTable({rowsData, headCells, orderColumnBy}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(orderColumnBy);
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rowsData.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  return (
    <>
       <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="base table"
          >
            <TableHeader
              headCells={headCells}
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rowsData.length}
            />
            <TableBody>
              {rowsData
                .map((rowsData, index) => {
                  const isItemSelected = isSelected(rowsData.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, rowsData.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={rowsData.name}
                      selected={isItemSelected}
                    >
                      <TableCell key={`checkbox-${index}`} padding="checkbox">
                        <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }}/>
                      </TableCell>
                      <TableCell key={`${rowsData.id}-${index}`} scope="row" padding="none">{rowsData.id}</TableCell>
                      <TableCell key={`${rowsData.name}-${index}`} scope="row" padding="none">{rowsData.name}</TableCell>
                      <TableCell key={`${rowsData.dateOfBirth}-${index}`} scope="row" padding="none">{rowsData.dateOfBirth}</TableCell>
                      <TableCell key={`${rowsData.sex}-${index}`} scope="row" padding="none">{rowsData.sex}</TableCell>
                      <TableCell key={`${rowsData.modifier}-${index}`} scope="row" padding="none">{rowsData.modifier}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
      </>
  );
}
