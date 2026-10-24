import React from 'react'
import { useParams, Link, useNavigate, Navigate } from 'react-router'
import { recipes } from './RecipeList';

export const RecipeDetail = () => {

  const { recipeId } = useParams();

  const selectedRecipe = recipes.filter(recipe => recipe.id == recipeId)[0]

  const navigate = useNavigate();

  // console.log(selectedRecipe)

  return (
    <div className='max-w-4xl mx-auto'>
        <div className='bg-white my-4 px-6 py-8 rounded-xl shadow-sm'>
          <Link onClick={()=> navigate(-1)} className='text-rose-600 font-semibold'>← Back to Recipes</Link>
          <h2 className='text-xl font-bold my-4'>{selectedRecipe.title}</h2>
          <div className='grid grid-cols-2 '>
            <div>
              <h3 className='font-semibold text-lg mb-2'>Ingredients</h3>
              <ul className='ml-4'>
                {
                  selectedRecipe.ingredients.map((ingredient)=>(
                    <li 
                      key={ingredient}
                      className='list-disc'
                    >{ingredient}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-lg mb-2'>Instructions</h3>
              <ul className='ml-4'>
                {
                  selectedRecipe.instructions.map((instruction)=>(
                    <li 
                      key={instruction}
                      className='list-decimal'
                    >{instruction}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
