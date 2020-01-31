import React from 'react'


export default function TodoList({ todos }) {
    return (
        <div>
            {todos.map(todo => <div key={todo._id}>{todo.content}</div>)}
        </div>
    )
}
