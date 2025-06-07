import React from 'react'
import type { FilterType } from '../types'

const filters: FilterType[] = ['all', 'active', 'completed']

interface Props {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

const Filter: React.FC<Props> = ({ currentFilter, onFilterChange }) => (
  <div className="flex space-x-4 mb-4">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => onFilterChange(filter)}
        className={`px-3 py-1 rounded capitalize ${
          currentFilter === filter
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
)

export default Filter