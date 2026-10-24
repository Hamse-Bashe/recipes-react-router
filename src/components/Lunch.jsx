import { Link } from "react-router"
import { recipes } from "../pages/RecipeList"


export const Lunch = () => {

    const lunch = recipes.filter(recipe => recipe.category === 'lunch')[0]
    // console.log(lunch)

  return (
    <div className='bg-white my-4 px-6 py-8 rounded-xl'>
          <h2 className='text-2xl font-bold my-4'>Lunch Recipes</h2>  
          <Link
            to={`../../recipes/${lunch.id}`}
          >
            <div className="border border-2 border-gray-300 p-4 rounded-xl">
                <h2 className="text-lg font-bold">{lunch.title}</h2>
                <p className="text-gray-500">{lunch.description}</p>
            </div>
          </Link>
    </div>
  )
}