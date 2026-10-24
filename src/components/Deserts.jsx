import { Link } from "react-router"
import { recipes } from "../pages/RecipeList"


export const Deserts = () => {

    const deserts = recipes.filter(recipe => recipe.category === 'desserts')[0]
    // console.log(deserts)

  return (
    <div className='bg-white my-4 px-6 py-8 rounded-xl'>
          <h2 className='text-2xl font-bold my-4'>Desserts Recipes</h2> 
          <Link
            to={`../../recipes/${deserts.id}`}
          >
            <div className="border border-2 border-gray-300 hover:shadow-sm p-4 rounded-xl">
                <h2 className="text-lg font-bold">{deserts.title}</h2>
                <p className="text-gray-500">{deserts.description}</p>
            </div>
          </Link>
    </div>
  )
}
