import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Guide from './pages/Guide'
import Cart from './pages/Cart'
import SignIn from "./pages/SignIn"
import SignUp from"./pages/SignUp"
import Profile from "./pages/Profile"
import Workshops from "./pages/Workshops";
import MainLayout from "./layouts/MainLayout";
import WorkshopsLayout from "./layouts/WorkshopsLayout";
import WorkshopDetailsLayout from "./layouts/WorkshopDetailsLayout";
import WorkshopDetailsPage from "./pages/WorkshopDetailsPage";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <MainLayout />,
        children: [
            { path:"/", element:<Home />},
            { path:"/index", element:<Home />},
            { path:"/home", element:<Home />},
            { path:"/guide", element:<Guide />},
            { path:"/cart", element:<Cart />},
            { path: "/signin", element: <SignIn />},
            { path: "/signup", element: <SignUp />},
            { path: "/profile", element: <Profile /> }
        ]
    },
    { 
        path:"/", 
        element:<WorkshopsLayout /> ,
        children: [
            { path:"/workshops", element:<Workshops />},

        ]
    },
    { 
        path:"/", 
        element:<WorkshopDetailsLayout /> ,
        children: [
            { path:"/:id", element:<WorkshopDetailsPage />},

        ]
    }
])

export default router