import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationTab = props => {
    const {
        id,
        path,
        title,
        onTabClick,
        liTagClassName,
        spanText,
        isActive,
    } = props;

    return (
        <li
            id={id}
            className={`nav-item ${liTagClassName} ${isActive ? 'active' : ''}`}
            onClick={() => onTabClick(props.id)}
            tabIndex={-1}
        >
            <Link to={path} className={`nav-link ${isActive ? 'active' : ''}`}>
                {title}
                {spanText && <span>{spanText}</span>}
            </Link>

        </li>
    );
};

NavigationTab.defaultProps = {
    liTagClassName: '',
    spanText: null,
    isActive: false,
    isDisabled: false,
};

NavigationTab.propTypes = {
    id: PropTypes.string.isRequired,
    path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    title: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired,
    liTagClassName: PropTypes.string,
    spanText: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

export default NavigationTab;
