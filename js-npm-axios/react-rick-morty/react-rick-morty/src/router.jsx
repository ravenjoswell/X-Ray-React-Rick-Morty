import { createBrowserRouter } from "react-router-dom";
import App from './App'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import CharacterPage from "./pages/Characters"
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
                index: true,
                element: <AboutPage />
            },
        ],
        errorElement: <NotFoundPage />
    }
])

export default router;