import React from 'react'
import { Link } from 'react-router';

// Recipe Data
export const recipes = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ]
  },
  {
    id: 3,
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese',
    category: 'lunch',
    ingredients: [
      '2 cups chopped tomatoes',
      '1 cucumber, sliced',
      '1/2 red onion, sliced',
      '1/2 cup feta cheese',
      '1/4 cup Kalamata olives',
      '2 tablespoons olive oil',
      '1 tablespoon lemon juice',
      'Salt and black pepper to taste'
    ],
    instructions: [
      'Wash and chop the tomatoes and cucumber',
      'Slice the red onion and add the olives',
      'Sprinkle feta cheese over the vegetables',
      'Mix olive oil, lemon juice, salt, and black pepper',
      'Pour the dressing over the salad and toss gently',
      'Serve fresh'
    ]
  },
  {
    id: 4,
    title: 'Breakfast Smoothie Bowl',
    description: 'Healthy and colorful breakfast bowl',
    category: 'breakfast',
    ingredients: [
      '1 frozen banana',
      '1/2 cup frozen strawberries',
      '1/2 cup yogurt',
      '1/4 cup milk',
      '1/4 cup granola',
      '1 tablespoon chia seeds',
      'Fresh blueberries',
      'Sliced banana for topping'
    ],
    instructions: [
      'Add the frozen banana, strawberries, yogurt, and milk to a blender',
      'Blend until smooth and thick',
      'Pour the smoothie into a bowl',
      'Top with granola, chia seeds, fresh blueberries, and sliced banana',
      'Serve immediately'
    ]
  },
];


export const RecipeList = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-xl font-bold my-4'>All Recipes</h2>
      <div className='grid grid-cols-3 gap-4'>
        {
          recipes.map((recipe)=>(
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} className='bg-white px-4 py-6 rounded-xl space-y-2 shadow-sm hover:shadow-md'>
              <h2 className='font-semibold text-lg'>{recipe.title}</h2>
              <p className='text-sm text-gray-500'>{recipe.description}</p>
              <button className='bg-rose-100 rounded-xl text-rose-600 p-2 font-semibold'>{recipe.category}</button>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
