import React from 'react';
import PropTypes from 'prop-types';

const Padding = ({ children, p, pTop, pBottom, pLeft, pRight, dimension }) => {
    let paddingStyles = {};
    if (p) {
        paddingStyles = {
            padding: p + dimension,
        };
    } else {
        paddingStyles = {
            paddingTop: pTop + dimension,
            paddingRight: pRight + dimension,
            paddingBottom: pBottom + dimension,
            paddingLeft: pLeft + dimension,
        };
    }

    return (
        <div style={paddingStyles}>{ children }</div>
    );
};

Padding.propTypes = {
    p: PropTypes.number,
    pTop: PropTypes.number,
    pBottom: PropTypes.number,
    pLeft: PropTypes.number,
    pRight: PropTypes.number,
    dimension: PropTypes.string,
};

export { Padding };
