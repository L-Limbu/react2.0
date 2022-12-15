import { render, screen } from '@testing-library/react';
import { Square } from '../Square';
test('renders square component', () => {
    const value = 'X'
    render(<Square className='square-tile' value={value}/>)
    const button  = screen.getByRole('button')
    expect(button).toHaveTextContent('X')
})

