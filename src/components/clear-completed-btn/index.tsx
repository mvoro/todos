import {Todo} from "../../types/todos.ts";
import {CSSProperties, Dispatch, SetStateAction} from "react";

const customStyles: CSSProperties = {
    padding: '0.25rem 0.5rem',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--br-radius)',
    color: 'var(--error)',
    cursor: 'pointer',
}

const ClearCompletedBtn = ({setTodos}: {setTodos: Dispatch<SetStateAction<Todo[]>>}) => {

    const onClearCompleted = () => {
        setTodos(prev =>  prev.filter(todo => !todo.completed))
    }

    return (
        <button style={customStyles} onClick={onClearCompleted}>
            Clear completed
        </button>
    )
}
export default ClearCompletedBtn