import { render, screen, fireEvent } from '@testing-library/react';
import Todos from './index';
import {getRandomKey} from "../../utils/getRandomKey.ts";

describe('Todos Component', () => {
    const mockSetTodos = jest.fn();
    const sampleTodos = [
        { id: getRandomKey(), text: 'Task 1', completed: false },
        { id: getRandomKey(), text: 'Task 2', completed: true },
    ];

    it('отображает список задач', () => {
        render(<Todos todos={sampleTodos} setTodos={mockSetTodos} type="All" />);
        const tasks = screen.getAllByRole('listitem');
        expect(tasks).toHaveLength(2);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    it('фильтрует задачи по статусу', () => {
        const { rerender } = render(<Todos todos={sampleTodos} setTodos={mockSetTodos} type="Active" />);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.queryByText('Task 2')).not.toBeInTheDocument();

        rerender(<Todos todos={sampleTodos} setTodos={mockSetTodos} type="Completed" />);
        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    });

    it('вызывает setTodos при переключении статуса задачи', () => {
        render(<Todos todos={sampleTodos} setTodos={mockSetTodos} type="All" />);
        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);

        expect(mockSetTodos).toHaveBeenCalledWith(expect.any(Array));
    });
});