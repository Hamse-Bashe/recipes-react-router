import { Link, useLocation } from "react-router"
import { recipes } from "../pages/RecipeList"

export const CategoryRecipes = () => {

    const location = useLocation();
    
    const pathSegments = location.pathname.split("/");
    const currentSegment = pathSegments[pathSegments.length - 1]; // Result: "settings"
    // console.log(currentSegment)

  const categoryRecipe = recipes.filter(recipe => recipe.category ==  currentSegment)[0]

  return (
    <div className='bg-white my-4 px-6 py-8 rounded-xl'>
          <h2 className='text-2xl font-bold my-4 capitalize'>{categoryRecipe.category} recipes</h2>
          <Link
            to={`../../recipes/${categoryRecipe.id}`}
          >
            <div className="border border-2 border-gray-300 p-4 rounded-xl">
                <h2 className="text-lg font-bold">{categoryRecipe.title}</h2>
                <p className="text-gray-500">{categoryRecipe.description}</p>
            </div>
          </Link>  
    </div>
  )
  
}
