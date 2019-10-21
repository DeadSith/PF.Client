const isGapDimension = dimension => dimension.split('_').length > 1;
const getGap = gridProps => gridProps.split('_')[1];
export const getGridItems = grid => {
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
};

export const getGridItemsStyles = gridItems => {
    const gridStyles = [];
    for (let i = 0, counter = 1; i < gridItems.length; i++) {
        if (Object.keys(gridItems[i]) == 'col') {
            gridStyles.push({
                gridColumnStart: counter,
                gridColumnEnd: counter + gridItems[i].col,
            });
            counter += gridItems[i].col;
        } else if (Object.keys(gridItems[i]) == 'gap') {
            counter += gridItems[i].gap;
        }
    }
    return gridStyles;
};

export const getBaseGridStyles = (baseGrid, gapColumn) => {
    const gridSchema = this.getGridSchema(baseGrid);
    const gridStyle = {
        display: 'grid',
        gridColumnGap: `${gapColumn}em`,
    };
    gridStyle.gridTemplateColumns = gridSchema.join(' ');
    return { ...gridStyle };
};

export const getGridSchema = (baseGrid) => {
    const gridSchema = [];
    for (let i = 0; baseGrid > i; ++i) {
        gridSchema.push('1fr');
    }
};
export const isValidGrid = (grid) => {
    return (
        grid.reduce((counter, gridItem) => {
            counter += Number(Object.values(gridItem));
            return counter;
        }, 0) <= 12
    );
};