import {NUMBERS, SQUARE} from "typings";

interface IInput {
    square: SQUARE;
    value: NUMBERS;
}

/**
 * A function that return true if the values is already being used in the current grid square.
 * @param input object with 3X# Square and value.
 **/
function isInSquare({square, value} : IInput) : boolean {
    return [...square[0],...square[1],...square[2]].includes(value);
}

export default isInSquare;