import {TypeTodos} from "../../types/todos.ts";
import styles from './typeTabs.module.css'

type Props = {
    type: TypeTodos
    setType: (type: TypeTodos) => void
}

const TYPES: TypeTodos[] = ['All', 'Active', 'Completed']

const TypeTabs = ({type, setType} : Props) => {
    return (
        <div className={styles.wrapper}>
            {TYPES.map((btnType, idx) => (
                <button
                    key={idx}
                    onClick={() => setType(btnType)}
                    disabled={btnType === type}
                >
                    {btnType}
                </button>
            ))}
        </div>
    )
}
export default TypeTabs