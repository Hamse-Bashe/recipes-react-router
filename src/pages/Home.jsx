import React from 'react'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col items-center text-center space-y-6 py-6'>
        <div className='space-y-4 mt-4'>
            <h1 className='text-3xl font-black'>Welcome to Recipe Book</h1>
            <p className='text-lg text-gray-500'>Discover delicious recipes and start cooking today!</p>
        </div>
        <div className='max-w-2xl'>
            <div className='grid grid-cols-2 gap-4'>
                <Link
                    to='recipes'
                    className='bg-rose-600 px-4 py-8 rounded-xl space-y-2'
                >
                    <h1 className='text-white text-xl font-bold'>Browse Recipes</h1>
                    <span className='text-white text-lg'>Explore our collection of delicious recipes</span>
                </Link>
                <Link
                    to='categories'
                    className='bg-rose-600 px-4 py-8 rounded-xl space-y-2'
                >
                    <h1 className='text-white text-xl font-bold'>Recipe Categories</h1>
                    <span className='text-white text-lg'>Find recipes by category</span>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}
