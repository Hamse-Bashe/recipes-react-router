import { createBrowserRouter } from "react-router";
import App from "./App";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { RecipeList } from "./pages/RecipeList";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Breakfast } from "./components/Breakfast";
import { Lunch } from "./components/Lunch";
import { Dinner } from "./components/Dinner";
import { Deserts } from "./components/Deserts";
import { CategoryRecipes } from "./pages/CategoryRecipes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
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