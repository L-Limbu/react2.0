import { render, screen } from '@testing-library/react';

import { Todo } from '../todo'

test('renders todo component', ()=> {
    render(<Todo />);
    const todoElement = screen.getByTestId(/todo-1/i);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Hello');
})

