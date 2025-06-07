import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { Todo, FilterType } from '../types'

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  
  const [filter, setFilter] = useState<FilterType>('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }])
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
    totalTodos: todos.length,
  }
}

export default useTodos