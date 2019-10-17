import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationBar from './../navigation/NavigationBar'
import "../styles.scss";

class AppLayout extends Component {
    async componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

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
            }
        ];

        return (
            <Fragment>
                <BrowserRouter>
                    <NavigationBar
                        divTagClassName="navlinks-wrapper color-red"
                        ulTagClassName="nav nav-horizontal"
                        tabs={globalNavTabs}
                        selectedTabId={'people'}
                    />
                    <Switch>
                        <Route
                            path={'/people'}
                            render={() => (
                                <div className="color-red">Page container</div>
                            )}
                        />
                        <Route
                            path={'/settings'}
                            render={() => (
                                <div className="color-red">Settings container</div>
                            )}
                        />                        
                        <Redirect exact from={'/'} to={'/people'} />
                    </Switch>
                </BrowserRouter>

            </Fragment>
        );
    }
}

AppLayout.defaultProps = {

};

AppLayout.propTypes = {

};

export default AppLayout;
