import { render, screen } from '@testing-library/react';

import { Todo } from '../todo'

describe('todo components', () => {
    
    test('renders todo component', ()=> {
        render(<Todo />);
        const todoElement = screen.getByTestId(/todo-1/i);
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('Hello World');
        expect(todoElement).toHaveTextContent('Hello Wo');
    })
})

