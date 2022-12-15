import { calculateWinner } from "../calculateWinner";


test.each(
    [[0,1, 2, 1],
    [3, 4, 5, 1],
    [6, 7, 8, 1],
    [0, 3, 6, 1],
    [1, 4, 7, 1],
    [2, 5, 8, 1],
    [0, 4, 8, 1],
    [2, 4, 6, 1]]
    )('function calculateWinner returns the winning lines in the squares(array) in index $a, $b and $c', 
    (a,b,c, value)=> {
    const testSquare = Array(9).fill(null)
    testSquare[a] = value
    testSquare[b] = value
    testSquare[c] = value
    expect(calculateWinner(testSquare)).toEqual([a,b,c])
})
test('function calculateWinner returns null when there are no 3 idetical values in chosen lines in the array',
() => {
    const testSquare = Array(9).fill(null)
    testSquare[0] = 2
    testSquare[4] = 2
    testSquare[7] = 2
    expect(calculateWinner(testSquare)).toBe(null)
})