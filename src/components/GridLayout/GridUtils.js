import { range } from 'lodash';

const isGapDimension = dimension => dimension.split('_').length > 1;
const getGap = gridProps => gridProps.split('_')[1];
export const getGridItems = grid => {
    if (grid.length > 0) {
        return grid.split('-').reduce((propsObj, gridProps) => {
            if (isGapDimension(gridProps)) {
                propsObj.push({
                    gap: Number(getGap(gridProps)),
                });
            } else {
                propsObj.push({
                    col: Number(gridProps),
                });
            }
            return propsObj;
        }, []);
    }
    return [];
};

export const getGridItemsStyles = gridItems => {
    const gridStyles = [];
    for (let i = 0, counter = 1; i < gridItems.length; i++) {
        if (Object.keys(gridItems[i])[0] === 'col') {
            gridStyles.push({
                gridColumnStart: counter,
                gridColumnEnd: counter + gridItems[i].col,
            });
            counter += gridItems[i].col;
        } else if (Object.keys(gridItems[i])[0] === 'gap') {
            counter += gridItems[i].gap;
        }
    }
    return gridStyles;
};

export const getGridSchema = baseGrid => {
    return range(baseGrid).reduce(arr => {
        return arr.push('1fr');
    }, []);
};

export const getBaseGridStyles = (baseGrid, gapColumn) => {
    return {
        display: 'grid',
        gridColumnGap: `${gapColumn}em`,
        gridTemplateColumns: getGridSchema(baseGrid).join(' '),
    };
};

export const isValidGrid = gridItems => {
    if (gridItems.length > 0) {
        return (
            gridItems.reduce((counter, gridItem) => {
                counter += Number(Object.values(gridItem));
                return counter;
            }, 0) <= 12
        );
    }
    return false;
};
