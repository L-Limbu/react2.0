import { render, screen } from '@testing-library/react';
import { Square } from '../Square';
test('renders square component', () => {
    const value = 1
    render(<Square className='square-tile' value={value}/>)
    expect(screen.getByRole('button', {name: 1})).toHaveTextContent(1)
    expect(screen.getByRole('button')).toHaveTextContent(1)

})