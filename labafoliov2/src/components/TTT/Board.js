import { useState } from "react";
import { Square } from "./Square";
import './styles/board.css'

export function Board(){
    const [game, setGame] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function renderSquare(i){
       return (
        <Square value={game[i]} key={i} onClick={() => handleClick(i)}/>
       )
    }
    function handleClick(i){
        const duplicateGame = game.slice()
        if (duplicateGame[i]) {
            return
        }
        duplicateGame[i] = xIsNext ? 'X' : 'O'
        setGame(duplicateGame)
        setXIsNext(!xIsNext)
    }

    let board = []
    for (let i = 0; i<9; i++){
        board.push(renderSquare(i))
    }
    let status = (xIsNext ? 'X' : 'O')
    
    return (
        <div>
            <p style={{fontSize:'4rem', fontWeight:'bold'}}>Tik-Tak-Toe</p>
            <p style={{ fontSize: '3rem', fontWeight:"600" }}>
                Player: {status}
            </p>
            <br/>
            <div className="board">
                {board}
            </div>
        </div>
    )

}