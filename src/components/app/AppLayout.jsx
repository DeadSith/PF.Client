import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import BaseTable from '../table/BaseTable';
import '../styles.scss';
import GridLayout, { GridLayoutRow } from '../GridLayout';
import TableContainer from "../table/TableContainer";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import PensionersContainer from "../pensioners/PensionersContainer";
import PensionersTable from "../pensioners/PensioanersTable";

const AppLayout = () => {

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
                      <PensionersContainer/>
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
