import {useCallback, useState} from 'react'
import styles from './app.module.css'
import {Todo, TypeTodos} from "./types/todos.ts";
import Todos from "./components/todos";
import TypeTabs from "./components/type-tabs";
import ClearCompletedBtn from "./components/clear-completed-btn";
import AddTodo from "./components/add-todo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [type, setType] = useState<TypeTodos>('All')

    const leftTodos = useCallback(() => todos.filter(todo => !todo.completed).length, [todos])

    return (
        <div className={styles.wrapper}>
            <AddTodo setTodos={setTodos}/>
            <Todos type={type} setTodos={setTodos} todos={todos}/>
            <footer className={styles.footer}>
                <span>{leftTodos()} items left</span>
                <TypeTabs type={type} setType={setType}/>
                <ClearCompletedBtn setTodos={setTodos}/>
            </footer>
        </div>
    )
}

export default App
