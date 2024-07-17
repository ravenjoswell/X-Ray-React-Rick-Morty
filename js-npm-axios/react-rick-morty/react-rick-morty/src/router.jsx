import { createBrowserRouter } from "react-router-dom";
import App from './App'
import HomePage from "./pages/HomePage";
import CharactersPage from "./CharactersPage";
import NotFoundPage from "./pages/NotFoundPage"



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'characters/',
                element: <CharactersPage />,
            },
        ],
        errorElement: <NotFoundPage />
    }
])

export default router;