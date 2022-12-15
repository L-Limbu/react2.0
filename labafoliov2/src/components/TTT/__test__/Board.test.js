import { render, screen, fireEvent } from '@testing-library/react';
import { Board } from "../Board";

test('renders 9 square component', () => {
    render(<Board />)
    let board  = screen.getAllByTestId('square-tile')
    expect(board).toHaveLength(9)
})

test('renders text in game', () => {
    render(<Board />)
    const text  = screen.getByText('Player: X')
    expect(text).toHaveTextContent('Player: X')
})

test.each([[0],[1],[2],[3],[4],[5],[6],[7],[8]])('renders changed text in game when square is clicked', (i) => {
    render(<Board />)
    const button = screen.getAllByTestId('square-tile')[i]
    fireEvent.click(button)
    const text = screen.getByText('Player: O')
    expect(text).toHaveTextContent('Player: O')
})
test.each([[0],[1],[2],[3],[4],[5],[6],[7],[8]])('renders changed text in game when another square is clicked twice', (i) => {
    render(<Board />)
    let button = screen.getAllByTestId('square-tile')[i]
    fireEvent.click(button)
    let clickedButton = screen.getAllByTestId('square-tile')[(i+1)%8]
    fireEvent.click(clickedButton)
    const text = screen.getByText('Player: X')
    expect(text).toHaveTextContent('Player: X')
})
test.each([[0],[1],[2],[3],[4],[5],[6],[7],[8]])('text not changed in game when same square is clicked twice', (i) => {
    render(<Board />)
    let button = screen.getAllByTestId('square-tile')[i]
    fireEvent.click(button)
    let clickedButton = screen.getAllByTestId('square-tile')[i]
    fireEvent.click(clickedButton)
    const text = screen.getByText('Player: O')
    expect(text).toHaveTextContent('Player: O')
})


test('status changes to indicate the winner X in the game', () => {
    render(<Board />)
    
    fireEvent.click(screen.getAllByTestId('square-tile')[0])
    fireEvent.click(screen.getAllByTestId('square-tile')[4])
    fireEvent.click(screen.getAllByTestId('square-tile')[1])
    fireEvent.click(screen.getAllByTestId('square-tile')[5])
    fireEvent.click(screen.getAllByTestId('square-tile')[2])
    
    let text = screen.getByTestId('status')
    expect(text).toHaveTextContent('Winner: X')
})
test('status changes to indicate the winner O in the game', () => {
    render(<Board />)
    
    fireEvent.click(screen.getAllByTestId('square-tile')[4])
    fireEvent.click(screen.getAllByTestId('square-tile')[0])
    fireEvent.click(screen.getAllByTestId('square-tile')[7])
    fireEvent.click(screen.getAllByTestId('square-tile')[1])
    fireEvent.click(screen.getAllByTestId('square-tile')[8])
    fireEvent.click(screen.getAllByTestId('square-tile')[2])
    
    let text = screen.getByTestId('status')
    expect(text).toHaveTextContent('Winner: O')
})

test('when reset is clicked the status returns player X', ()=> {
    render(<Board />)
    fireEvent.click(screen.getAllByTestId('square-tile')[0])
    fireEvent.click(screen.getByTestId('reset-button'))
    let text = screen.getByTestId('status')
    expect(text).toHaveTextContent('Player: X')
})

test('when game is drawn the status returns Game Draw', ()=> {
    render(<Board />)
    fireEvent.click(screen.getAllByTestId('square-tile')[0])
    fireEvent.click(screen.getAllByTestId('square-tile')[4])
    fireEvent.click(screen.getAllByTestId('square-tile')[1])
    fireEvent.click(screen.getAllByTestId('square-tile')[2])
    fireEvent.click(screen.getAllByTestId('square-tile')[6])
    fireEvent.click(screen.getAllByTestId('square-tile')[3])
    fireEvent.click(screen.getAllByTestId('square-tile')[5])
    fireEvent.click(screen.getAllByTestId('square-tile')[8])
    fireEvent.click(screen.getAllByTestId('square-tile')[7])
    let text = screen.getByTestId('status')
    expect(text).toHaveTextContent('Game Draw')
})



