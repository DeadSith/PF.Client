import React from 'react';
import PropTypes from 'prop-types';
import './styles/styles.scss';
import GridUtils from './GridUtils';

const GridLayoutRow = ({ children, grid, gapColumn, baseGrid }) => {
    const getBaseGrid = () => {
        const gridSchema = [];
        const gridStyle = {
            display: 'grid',
            gridColumnGap: `${gapColumn}em`,
        };

        for (let i = 0; baseGrid > i; ++i) {
            gridSchema.push('1fr');
        }
        gridStyle.gridTemplateColumns = gridSchema.join(' ');
        return { ...gridStyle };
    };

    const gridItems = GridUtils.getGridItems(grid);
    if (GridUtils.isValidGrid(gridItems)) {
        const gridItemsStyles = GridUtils.getGridItemsStyles(gridItems);
        return (
            <div className="gridBox">
                {children.map((child, index) => {
                    return (
                        <div key={`griditem_${index}`} style={gridItemsStyles[index]}>
                            {child}
                        </div>
                    );
                })}
            </div>
        );
    }
    return (
        <div style={getBaseGrid()}>
            {children.map((child, index) => {
                return <div key={`griditem_${index}`}>{child}</div>;
            })}
        </div>
    );
};

GridLayoutRow.defaultProps = {
    baseGrid: 12,
    gapColumn: 1,
};

GridLayoutRow.propTypes = {
    baseGrid: PropTypes.number,
    gapColumn: PropTypes.number,
    grid: PropTypes.string,
};

export { GridLayoutRow };
