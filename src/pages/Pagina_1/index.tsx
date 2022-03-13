import React, { useCallback, useRef, useState } from 'react'
import { background, backgroundWhite, gray, primary } from '../../utils/theme'
import './style.css';
import { AiFillDelete } from 'react-icons/ai'

interface todoProps {
    text: string;
}

export const Pagina_1: React.FC = () => {
    const [todos, setTodos] = useState<todoProps[]>([]);
    const input_ref = useRef<HTMLInputElement>(null);

    const addTodo = useCallback((event) => {
        event.preventDefault()
        const text = input_ref.current ? input_ref.current.value : '';
        setTodos((atualTodos) => {
            const newTodos = JSON.parse(JSON.stringify(atualTodos))
            newTodos.push({ text })
            return [...newTodos]
        })
        if (input_ref.current) input_ref.current.value = ''

    }, [input_ref])

    return (
        <div style={{ background: background }} id="container">
            <div style={{ background: backgroundWhite }} id="content">
                <h1>Todo App</h1>
                <form className='line' onSubmit={addTodo}>
                    <input type="text" style={{ width: '100%', paddingLeft:10 }} ref={input_ref} required />
                    <button style={{ color: backgroundWhite, background: primary }} className='button' type='submit'>+</button>
                </form>
                <div className='container-card'>
                    {todos.map((todo) => (
                        <div style={{ background: gray }} className='card'>
                            {todo.text}
                            <AiFillDelete />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}