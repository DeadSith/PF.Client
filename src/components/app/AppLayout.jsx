import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import BaseTable from '../table/BaseTable';
import '../styles.scss';
import GridLayout, { GridLayoutRow } from '../GridLayout';
import TableContainer from "../table/TableContainer";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rowsData = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

const test = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
];

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

const AppLayout = () => {

  const [tableData, setTableData] = React.useState(rowsData);

    const handleChangePage = (event, newPage) => {
      console.log(event);
      console.log('page changed' + newPage);
      setTableData(test);

    };

    const handleChangeRowsPerPage = event => {

    };

    const globalNavTabs = [
        {
            id: 'people',
            title: 'People',
            path: '/people',
        },
        {
          id: 'pensioners',
          title: 'Pensioners',
          path: '/pensioners',
        },
        {
            id: 'settings',
            title: 'Settings',
            path: '/settings',
        },
    ];

    return (
        <>
            <BrowserRouter>
                <NavigationBar
                    divTagClassName="navlinks-wrapper color-red"
                    ulTagClassName="nav nav-horizontal"
                    tabs={globalNavTabs}
                    selectedTabId="people"
                />
                <Switch>
                    <Route
                        path="/people"
                        render={() => (
                            <GridLayout>
                                <GridLayoutRow grid="offset_1-4-offset_2-4" gapColumn={2}>
                                    <div key="q">GridRow1</div>
                                    <div key="b">GridRow1</div>
                                </GridLayoutRow>
                            </GridLayout>
                        )}
                    />
                    <Route path="/pensioners" render={() =>
                        <TableContainer >
                            <BaseTable headCells={headCells} rowsData={tableData} orderColumnBy={"name"} />
                            <TablePagination
                              rowsPerPageOptions={[10]}
                              component="div"
                              count={rowsData.length}
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
                    } />
                    <Route path="/settings" render={() => <p>Setting content</p>} />
                    <Redirect exact from="/" to="/people" />
                </Switch>
            </BrowserRouter>
        </>
    );

}

AppLayout.defaultProps = {};

AppLayout.propTypes = {};

export default AppLayout;
