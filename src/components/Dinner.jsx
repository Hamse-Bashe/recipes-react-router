import { Link } from "react-router"
import { recipes } from "../pages/RecipeList"


export const Dinner = () => {

    const dinner = recipes.filter(recipe => recipe.category === 'dinner')[0]
    // console.log(dinner)

  return (
    <div className='bg-white my-4 px-6 py-8 rounded-xl'>
          <h2 className='text-2xl font-bold my-4'>Dinner Recipes</h2>  
          <Link
            to={`../../recipes/${dinner.id}`}
          >
            <div className="border border-2 border-gray-300 p-4 rounded-xl">
                <h2 className="text-lg font-bold">{dinner.title}</h2>
                <p className="text-gray-500">{dinner.description}</p>
            </div>
          </Link>
    </div>
  )
}