const GridUtils = {
    isGapDimension: function(dimension) {
        return dimension.split('_').length > 1;
    },
    getGap: gridProps => {
        return gridProps.split('_')[1];
    },
    isValidGrid: function(grid) {
        return (
            grid.reduce((counter, gridItem) => {
                counter += Number(Object.values(gridItem));
                return counter;
            }, 0) <= 12
        );
    },
    getGridItems: function(grid) {
        return grid.split('-').reduce((propsObj, gridProps) => {
            if (this.isGapDimension(gridProps)) {
                propsObj.push({
                    gap: Number(this.getGap(gridProps)),
                });
            } else {
                propsObj.push({
                    col: Number(gridProps),
                });
            }
            return propsObj;
        }, []);
    },
    getGridItemsStyles: function(gridItems) {
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
    },
}

export default GridUtils;