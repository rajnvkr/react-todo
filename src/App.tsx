import React from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItems'
import Filter from './components/Filter'
import useTodos from './hooks/useTodos'

const App: React.FC = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
    totalTodos,
  } = useTodos()

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Todo App
      </h1>
      
      <TodoForm onAdd={addTodo} />
      
      <Filter 
        currentFilter={filter} 
        onFilterChange={setFilter} 
      />
      
      {totalTodos === 0 ? (
        <p className="text-gray-500 text-center py-4">No todos yet!</p>
      ) : todos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No {filter} todos!
        </p>
      ) : (
        <ul className="divide-y">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
      
      <div className="mt-4 text-sm text-gray-500">
        {todos.length} of {totalTodos} todos shown
      </div>
    </div>
  )
}

export default App