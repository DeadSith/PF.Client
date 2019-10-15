import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavigationTab from './NavigationTab';

class NavigationBar extends Component {
    state = {
        currentTab:
            this.props.selectedTabId || this.props.tabs[0].id,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.selectedTabId !== this.props.selectedTabId) {
            this.setState({
                currentTab: this.props.selectedTabId,
            });
        }
    }

    onNavigationTabClick = id => {
        this.props.onNavigationTabClick(id);
        this.setState({
            currentTab: id,
        });
    };

    render() {
        const {
            divTagClassName,
            ulTagClassName,
            tabs,
        } = this.props;
        const { currentTab } = this.state;
        return (
            <div className={divTagClassName}>
                <ul className={`${ulTagClassName} left-alignment`}>
                    {tabs.map(tab => (
                        <NavigationTab
                            key={tab.id}
                            id={tab.id}
                            path={tab.path}
                            title={tab.title}
                            liTagClassName={tab.liTagClassName}
                            onTabClick={this.onNavigationTabClick}
                            spanText={tab.spanText}
                            isActive={tab.id === currentTab}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

NavigationBar.defaultProps = {
    divTagClassName: null,
    ulTagClassName: null,
    selectedTabId: null,
    tabs: [],
    onNavigationTabClick: () => {},
};

NavigationBar.propTypes = {
    divTagClassName: PropTypes.string,
    ulTagClassName: PropTypes.string,
    selectedTabId: PropTypes.string,
    tabs: PropTypes.array,
    onNavigationTabClick: PropTypes.func,
};

export default NavigationBar;
