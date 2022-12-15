import { render, screen, fireEvent } from '@testing-library/react';
import { Board } from "../Board";

test('renders 9 square component', () => {
    render(<Board />)
    const board  = screen.getAllByRole('button')
    expect(board).toHaveLength(9)
})

test('renders text in game', () => {
    render(<Board />)
    const text  = screen.getByText('Player: X')
    expect(text).toHaveTextContent('Player: X')
})

test.each([[0],[1],[2],[3],[4],[5],[6],[7],[8]])('renders changed text in game when square is clicked', (i) => {
    render(<Board />)
    const button = screen.getAllByRole('button')[i]
    fireEvent.click(button)
    const text = screen.getByText('Player: O')
    expect(text).toHaveTextContent('Player: O')
})
test.each([[0],[1],[2],[3],[4],[5],[6],[7],[8]])('renders changed text in game when square is clicked twice', (i) => {
    render(<Board />)
    let button = screen.getAllByRole('button')[i]
    fireEvent.click(button)
    let clickedButton = screen.getAllByRole('button')[(i+1)%8]
    fireEvent.click(clickedButton)
    const text = screen.getByText('Player: X')
    expect(text).toHaveTextContent('Player: X')
})
