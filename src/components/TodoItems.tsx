import React from 'react'
import type { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => (
  <li className="flex items-center justify-between py-2 border-b">
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 mr-3"
      />
      <span className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
        {todo.text}
      </span>
    </div>
    <button
      onClick={() => onDelete(todo.id)}
      className="text-red-500 hover:text-red-700"
      aria-label="Delete"
    >
      ✕
    </button>
  </li>
)

export default TodoItem