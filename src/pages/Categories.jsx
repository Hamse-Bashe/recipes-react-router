import React from 'react'
import { Link, Outlet } from 'react-router'

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


export const Categories = () => {


  return (
    <div className='max-w-4xl mx-auto'>
        <div className='bg-white my-4 px-6 py-8 rounded-xl shadow-sm'>
          <h2 className='text-2xl font-bold my-4'>Categories</h2>
          <div>
            {
              categories.map((category)=>(
                <Link
                  to={`/categories/${category.id}`}
                  key={category.id}  
                >
                <div 
                  className='p-4 hover:bg-rose-100 rounded-xl mb-2' 
                  >
                    <p className='font-bold text-lg hover:text-rose-600'>{category.name}</p>
                    <span className='text-gray-600'>{category.description}</span>
                </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className='shadow-sm'>
          <Outlet/>
        </div>
    </div>
  )
}
