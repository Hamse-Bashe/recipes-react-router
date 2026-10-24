import React from 'react'
import { NavLink } from 'react-router'

export const Nav = () => {
  return (
    <div className='bg-white py-6 shadow-sm'>
        <header className='flex justify-around'>
            <h1 className='text-rose-600 font-bold text-xl'>Recipe Book</h1>
            <nav className='space-x-2'>
                <NavLink
                    to="."
                    className={({isActive})=> (isActive ? `font-bold text-rose-600` : undefined)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="recipes"
                    className={({isActive})=> (isActive ? `font-bold text-rose-600` : undefined)}
                >
                    Recipes
                </NavLink>
                <NavLink
                    to="categories"
                    className={({isActive})=> (isActive ? `font-bold text-rose-600` : undefined)}
                >
                    Categories
                </NavLink>
            </nav>
        </header>
    </div>
  )
}
