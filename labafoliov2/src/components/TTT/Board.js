import { useState } from "react";
import { Square } from "./Square";
import { calculateWinner } from "./calculateWinner";
import './styles/board.css'

export function Board(){
    const [game, setGame] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function renderSquare(i){
       return (
        <Square value={game[i]}/>
       )
    }
    function handleClick(i){
        const duplicateGame = game.slice()
        if (duplicateGame[i] || calculateWinner(duplicateGame)) {
            return
        }
        duplicateGame[i] = xIsNext ? 'X' : 'O'
        setGame(duplicateGame)
       
        setXIsNext(!xIsNext)

    }
    function checkDraw(game) {
        let checked = 0
        for (let i=0; i<9; i++) {
            checked = game[i] ? checked + 1 : checked
        }
        return checked === 9 ? true : false
    }

    function resetGame(){
        setGame(Array(9).fill(null))
        setXIsNext(true)
    }



    let board = []
    for (let i = 0; i<9; i++){
        board.push(
            <div data-testid="square-tile" key={i} onClick={() => handleClick(i)}>
                {renderSquare(i)}
            </div>
        )
    }

    const winner = calculateWinner(game)
    let status = winner ? "Winner: " : checkDraw(game) ? 'Game Draw ' : 'Player: '
    let statusPlayer = !xIsNext ? 'X' : 'O'
    let winnerStatus = winner ? statusPlayer : checkDraw(game) ? '' : xIsNext ? 'X' : 'O'
    
    if (winner){
        winner.forEach(
            e => board[e] = <div className="winning-tile" key={e}>
                <Square value={winnerStatus} />
            </div>
        )
    }

    return (
        <div>
            <p style={{fontSize:'4rem', fontWeight:'bold'}}>Tik-Tak-Toe</p>
            <p data-testid="status" style={{ fontSize: '3rem', fontWeight:"600" }}>
                {status} {winnerStatus}
            </p>
            <br/>
            <div className="board">
                {board}
            </div>
            <br />
            <button data-testid="reset-button" className="reset-button" onClick={() => resetGame()}>
                Reset
            </button>
        </div>
    )

}