import { useState } from 'react';
import styles from '@/styles/TodoItem.module.css';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {

    const [editing, setEditing] = useState(false);
    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }
    const handleEditing = () => {
        setEditing(true);
    };
    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
        }
    };
    return (
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input
                    type="checkbox"
                    checked={itemProp.completed}
                    onChange={() => handleChange(itemProp.id)}
                />
                <button onClick={handleEditing}> <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
                </button>
                <button onClick={() => delTodo(itemProp.id)}><FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} /></button>
                {itemProp.title}
            </div>
            <input
                type="text"
                value={itemProp.title}
                className={styles.textInput}
                style={editMode}
                onChange={(e) => setUpdate(e.target.value, itemProp.id)}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
};
export default TodoItem;
