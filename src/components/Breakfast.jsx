import { Link } from "react-router"
import { recipes } from "../pages/RecipeList"


export const Breakfast = () => {

    const breakfast = recipes.filter(recipe => recipe.category === 'breakfast')[0]
    // console.log(breakfast)

  return (
    <div className='bg-white my-4 px-6 py-8 rounded-xl'>
          <h2 className='text-2xl font-bold my-4'>Breakfast Recipes</h2>
          <Link
            to={`../../recipes/${breakfast.id}`}
          >
            <div className="border border-2 border-gray-300 p-4 rounded-xl">
                <h2 className="text-lg font-bold">{breakfast.title}</h2>
                <p className="text-gray-500">{breakfast.description}</p>
            </div>
          </Link>  
    </div>
  )
}
