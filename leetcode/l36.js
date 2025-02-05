/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const map = {
        ['1']: 0,
        ['2']: 0,
        ['3']: 0,
        ['4']: 0,
        ['5']: 0,
        ['6']: 0,
        ['7']: 0,
        ['8']: 0,
        ['9']: 0,
    };
    let result = true;
    for (let i = 0; i < board.length; i++) {
        if (result === false) {
            break;
        }
        const rowMap = structuredClone(map);
        for (let j = 0; j < board[i].length; j++) {
            console.log('entry', board[i][j]);
            if (board[i][j] !== '.') {
                if (rowMap[board[i][j]] !== 1) {
                    rowMap[board[i][j]] = 1;
                } else {
                    result = false;
                    break;
                }
            }
        }
    }
    return result;
};

const board = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
