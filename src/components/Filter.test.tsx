// import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Filter from './Filter'
import type { FilterType } from '../types'

test('changes filter correctly', () => {
  const mockChange = vi.fn()
  const activeFilter: FilterType = 'all'
  
  render(
    <Filter 
      currentFilter={activeFilter} 
      onFilterChange={mockChange} 
    />
  )
  
  fireEvent.click(screen.getByText('active'))
  expect(mockChange).toHaveBeenCalledWith('active')
  
  fireEvent.click(screen.getByText('completed'))
  expect(mockChange).toHaveBeenCalledWith('completed')
})