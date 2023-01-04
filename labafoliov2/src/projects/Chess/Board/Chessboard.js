import { Tile } from "../Tile/Tile";
import { initialBoard } from "./Constants";
import './chess-board.css'
const horizontalValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalValues = ['1','2','3','4','5','6','7','8']


export function ChessBoard(){
    let board = []
    for (let j=verticalValues.length-1; j>=0 ;j--) {
        for (let i=0; i < horizontalValues.length; i++) {
            const number = i + j + 2
            // path = 
            board.push(<Tile key={`${j},${i}`} number={number} />)
            
            
        }
    }
    return (
        <div id='chess-board'>
            {board}
        </div>
    )
}