import React, { useState } from 'react'
import axios from 'axios'
import { basePath, getConfig } from './util'

export default function TodoForm({ fetchTodos }) {


    const [content, setContent] = useState("")
    const [message, setMessage] = useState(null)
    const [timeout, saveTimeout] = useState(null)

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }


    const handleAddSuccess = (response) => {
        setContent("")
        console.log(response)
        setMessage("Todo added!")
        fetchTodos()

        if (timeout) clearTimeout(timeout)

        const temp = setTimeout(() => {
            setMessage(null)
        }, 5000);
        saveTimeout(temp)
    }

    const handleError = (error) => {
        console.log(error)
        setMessage("Something went wrong...")
        setTimeout(() => {
            setMessage(null)
        }, 5000);
    }


    const addTodo = (e) => {
        e.preventDefault()
        console.log("Adding todo...")

        axios.post(`${basePath}/todos`, { content }, getConfig())
            .then(response => handleAddSuccess(response))
            .catch(e => handleError(e))
    }

    return (
        <div>
            <h2>Welcome, here u can add todos</h2>
            <form onSubmit={(e) => addTodo(e)}>
                <label>
                    Todo-content:
                    <input type="text" value={content} onChange={(e) => handleContentChange(e)} />
                </label>
                <input type="submit" value="Add todo" />
                {message && <span>{message}</span>}
            </form>
        </div>
    )
}
