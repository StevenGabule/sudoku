import React, {Children, FC} from "react";
import {Container, Row} from './styles';
import Block from "./block";
import {GRID} from "typings";
import FillGrid from "utils/fill-grid";


const Grid: FC = () => {
    const grid: GRID = [
        [0, 4, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 1, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 3, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 6,],
        [0, 5, 0, 0, 0, 0, 0, 0, 0,],
    ];
    FillGrid(grid);
    console.log(grid)
    return (
        <Container data-cy={"grid-container"}>
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row data-cy={"grid-row-container"}>
                        {Children.toArray(
                            [...Array(9)].map((_, colIndex) => (
                                <Block
                                    colIndex={colIndex}
                                    rowIndex={rowIndex}/>
                            )))}
                    </Row>
                )))}
        </Container>
    )
}

export default Grid;