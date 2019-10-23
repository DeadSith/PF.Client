import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import EnhanceЕdTable from '../table/EnhanceЕdTable';
import MaterialTableDemo from '../table/MaterialTableDemo';
import '../styles.scss';
import GridLayout, { GridLayoutRow } from '../GridLayout';
import FormContainer from "../../containers/FormContainer";


class AppLayout extends Component {
    async componentDidMount() {}

    componentDidUpdate(prevProps) {}

    render() {
        const globalNavTabs = [
            {
                id: 'people',
                title: 'People',
                path: '/people',
            },
            {
                id: 'settings',
                title: 'Settings',
                path: '/settings',
            },
            {
                id: 'form',
                title: 'Form',
                path: '/form',
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
                        <Route path="/settings" render={() => <EnhanceЕdTable />} />
                        <Route path="/form"  render={() => <FormContainer />
} />
                        <Redirect exact from="/" to="/people" />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

AppLayout.defaultProps = {};

AppLayout.propTypes = {};

export default AppLayout;
