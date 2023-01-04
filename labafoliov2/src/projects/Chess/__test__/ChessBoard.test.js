import { render, screen, fireEvent } from '@testing-library/react';
import { ChessBoard } from '../Board/Chessboard';

test('renders 64 tiles in the board', () => {
    render(<ChessBoard />)
    let board = screen.getAllByTestId('chess-tile-id')
    expect(board).toHaveLength(64)
})