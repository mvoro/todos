import {Todo, TypeTodos} from "../../types/todos.ts";
import styles from './todos.module.css'

type Props = {
    setTodos: (todos: Todo[]) => void;
    todos: Todo[]
    type: TypeTodos
}

const Todos = ({todos, setTodos, type}: Props) => {
    const onCompleteTodo = (id: Todo['id']) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    const getFilteredTodos = (todos: Todo[], type: TypeTodos) => {
        if (type === 'Active') return todos.filter(todo => !todo.completed);
        if (type === 'Completed') return todos.filter(todo => todo.completed);
        return todos;
    };

    const filteredTodos = getFilteredTodos(todos, type);

    if(!filteredTodos.length){
        return (
            <ul className={styles.wrapper}>
                <li className={styles.todo}>
                    <span style={{fontSize: '12px'}}>All completed! Add new todo.</span>
                </li>
            </ul>
        )
    }

    return (
        <ul className={styles.wrapper}>
            {filteredTodos.map((todo) => (
                <li onClick={() => onCompleteTodo(todo.id)} className={styles.todo} key={todo.id}>
                    <input onChange={() => onCompleteTodo(todo.id)} type="checkbox" checked={todo.completed}/>
                    <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
                </li>
            ))}
        </ul>
    )
}
export default Todos