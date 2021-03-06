import React, {Children, FC} from "react";
import {Container, Row} from './styles';
import Block from "./block";
import {GRID} from "typings";
import {CreateFullGrid} from "utils";


const Grid: FC = () => {
    const grid: GRID = CreateFullGrid();

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