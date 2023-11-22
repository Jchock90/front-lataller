import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog'
import SignIn from "./pages/SignIn"
import SignUp from"./pages/SignUp"
import Profile from "./pages/Profile"
import Cities from "./pages/Cities";
import MainLayout from "./layouts/MainLayout";
import CitiesLayout from "./layouts/CitiesLayout";
import CityDetailsLayout from "./layouts/CityDetailsLayout";
import CityDetailsPage from "./pages/CityDetailsPage";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <MainLayout />,
        children: [
            { path:"/", element:<Home />},
            { path:"/index", element:<Home />},
            { path:"/home", element:<Home />},
            { path:"/blog", element:<Blog />},
            { path: "/signin", element: <SignIn />},
            { path: "/signup", element: <SignUp />},
            { path: "/profile", element: <Profile /> }
        ]
    },
    { 
        path:"/", 
        element:<CitiesLayout /> ,
        children: [
            { path:"/cities", element:<Cities />},

        ]
    },
    { 
        path:"/", 
        element:<CityDetailsLayout /> ,
        children: [
            { path:"/:id", element:<CityDetailsPage />},

        ]
    }
])

export default router