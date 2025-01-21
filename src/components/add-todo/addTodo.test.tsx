import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from './index';

describe('add todo', () => {
    it('добавляет задачу при вводе текста и нажатии кнопки', () => {
        const mockSetTodos = jest.fn();
        render(<AddTodo setTodos={mockSetTodos} />);

        const input = screen.getByTestId('add-todo-input');
        const button = screen.getByTestId('add-todo-button');

        fireEvent.change(input, { target: { value: 'Test Task' } });
        fireEvent.click(button);

        // Проверяем, что вызвался setTodos
        expect(mockSetTodos).toHaveBeenCalledWith(expect.any(Function));

        expect(input).toHaveValue('');
    });

    it('не добавляет задачу, если поле ввода пустое', () => {
        const mockSetTodos = jest.fn();
        render(<AddTodo setTodos={mockSetTodos} />);

        const button = screen.getByTestId('add-todo-button');
        fireEvent.click(button);

        // Проверяем, что setTodos не вызвался
        expect(mockSetTodos).not.toHaveBeenCalled();
    });

    it('обрабатывает пробелы корректно', () => {
        const mockSetTodos = jest.fn();
        render(<AddTodo setTodos={mockSetTodos} />);

        const input = screen.getByTestId('add-todo-input');
        fireEvent.change(input, { target: { value: '   ' } });

        const button = screen.getByTestId('add-todo-button');
        fireEvent.click(button);

        // Проверяем, что setTodos не вызвался
        expect(mockSetTodos).not.toHaveBeenCalled();
    });
});