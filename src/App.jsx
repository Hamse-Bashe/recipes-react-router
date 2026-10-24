import React from 'react'
import { Nav } from './components/Nav'
import { Outlet } from 'react-router'



// Categories
export const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Midday favorites'
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Evening meals'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats'
  }
];

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App