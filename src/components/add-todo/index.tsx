import {Dispatch, FormEvent, SetStateAction, useRef, useState} from "react";
import styles from './addTodo.module.css'
import {Todo} from "../../types/todos.ts";
import {getRandomKey} from "../../utils/getRandomKey.ts";


const AddTodo = ({setTodos}: {setTodos: Dispatch<SetStateAction<Todo[]>>}) => {
    const [text, setText] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onAddTodo = (e: FormEvent) => {
        e.preventDefault()
        const todo: Todo = {
            id: getRandomKey(),
            text,
            completed: false
        }
        if(text.trim().length) {
            setTodos(prev => [todo, ...prev])
        }
        setText('')
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={onAddTodo} className={styles.wrapper}>
            <input data-testid={'add-todo-input'} ref={inputRef} placeholder={'Enter your todo'} type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button data-testid={'add-todo-button'} type={'submit'}>+</button>
        </form>
    )
}
export default AddTodo