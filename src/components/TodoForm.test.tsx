// import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from './TodoItems'
import type { Todo } from '../types'

const mockTodo: Todo = {
  id: '1',
  text: 'Test Todo',
  completed: false,
}

test('renders todo item correctly', () => {
  const mockToggle = vi.fn()
  const mockDelete = vi.fn()
  
  render(
    <TodoItem 
      todo={mockTodo} 
      onToggle={mockToggle} 
      onDelete={mockDelete} 
    />
  )

  expect(screen.getByText('Test Todo')).toBeInTheDocument()
  expect(screen.getByRole('checkbox')).not.toBeChecked()
  
  fireEvent.click(screen.getByRole('checkbox'))
  expect(mockToggle).toHaveBeenCalledWith('1')
  
  fireEvent.click(screen.getByText('✕'))
  expect(mockDelete).toHaveBeenCalledWith('1')
})

test('shows completed todo with line-through', () => {
  const completedTodo = { ...mockTodo, completed: true }
  
  render(
    <TodoItem 
      todo={completedTodo} 
      onToggle={vi.fn()} 
      onDelete={vi.fn()} 
    />
  )
  
  expect(screen.getByText('Test Todo')).toHaveClass('line-through')
})