import {GRID} from "typings";

import FillGrid from "./";

describe('fillGrid', () => {
    it('should fills an empty grid', () => {
        const grid: GRID = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
            [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        ];
        FillGrid(grid);
        for (let row in grid) {
            for (let col in grid[row]) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
        }
    });
    it('should fills an valid partially filled grid', () => {
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
        for (let row in grid) {
            for (let col in grid[row]) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
        }
    });
});
