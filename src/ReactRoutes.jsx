import { createBrowserRouter } from "react-router";
import App from "./App";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { RecipeList } from "./pages/RecipeList";
import { RecipeDetail } from "./pages/RecipeDetail";
import { CategoryRecipes } from "./pages/CategoryRecipes";
import NotFound from "./components/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'recipes',
                element: <RecipeList/>
            },
            {
                path: 'recipes/:recipeId',
                element: <RecipeDetail/>
            },
            {
                path: 'categories',
                element: <Categories/>,
                children: [
                    {
                        path: 'breakfast',
                        element: <CategoryRecipes />
                    },
                    {
                        path: 'lunch',
                        element: <CategoryRecipes />
                    },
                    {
                        path: 'dinner',
                        element: <CategoryRecipes/>
                    },
                    {
                        path: 'desserts',
                        element: <CategoryRecipes />
                    },
                ]
            }
        ]
    }
])