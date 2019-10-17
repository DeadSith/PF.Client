import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import EnhanceЕdTable from '../table/EnhanceЕdTable';
import '../styles.scss';
import PaddingLayout, { Padding } from '../padding';

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
                            render={() => <div className="color-red">Page container</div>}
                        />
                        <Route
                            path="/settings"
                            render={() => (
                                <PaddingLayout>
                                    <Padding p={2} dimension={`em`}>
                                        <EnhanceЕdTable />
                                    </Padding>
                                </PaddingLayout>
                            )}
                        />
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
