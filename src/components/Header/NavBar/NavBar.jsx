import Workshops from "./Workshops";
import Home from "./Home";
import Guide from "./Guide";
import Login from "./Login";
import Logout from "./Logout";
import Cart from "./Cart";
import Profile from "./Profile";

import { useSelector } from "react-redux";

export default function NavBar() {
    let isLoggedIn = useSelector((store) => store.users.isLoggedIn);
    let name = useSelector((store) => store.users.user?.name);
    let photo = useSelector((store) => store.users.user?.photo);

    return (
        <>
            <nav className="lg:text-[14px] md:text-[10px] mx-10 justify-between hidden  md:flex md:gap-4 md:items-center uppercase " id="navStyle">
                <div className="justify-between hidden  md:flex md:gap-4 md:items-center uppercase" id="navStyle">
                <Home />
                <Workshops />
                <Guide />
                <Cart/>
                </div>
                {/* <Profile/> */}
                <div className="flex flex-col items-center lowercase">
                    {photo && (
                        <img
                            src={photo}
                            alt="Profile"
                            className="w-10 h-10 rounded-full mb-2 border-2 border-white" 
                        />
                    )}
                    {name && <div className="text-center font-bold pt-0 text-sm w-10">{name}</div>}
                </div>
                {isLoggedIn ? <Logout /> : <Login />}
            </nav>
        </>
    );
}
