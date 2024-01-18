import Home from "../NavBar/Home";
import Cities from "../NavBar/Cities";
import Login from "../NavBar/Login";
import Guide from "../NavBar/Guide";
import Logout from "../NavBar/Logout";
<<<<<<< HEAD
import Cart from "../NavBar/Cart";
=======
>>>>>>> 37a89d62ac1b3b1949bbb68e726d8bf0b5775e64
import { useSelector } from "react-redux";


import { useState } from "react";
export default function HamMenu() {
    const [isChecked, setChecked] = useState(false);
    let isLoggedIn = useSelector((store) => store.users.isLoggedIn);
    let name = useSelector((store) => store.users.user?.name);
    let photo = useSelector((store) => store.users.user?.photo);
  return (
    <>
      <div className="flex flex-col justify-between items-end p-0 mr-10 mt-16 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 flex"
          onClick={() => {
            setChecked(!isChecked);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {isChecked ? (
          <div className="flex flex-col justify-between gap-6 mt-8 uppercase items-center text-[9px]" id="navStyle">
            <Home />
            <Cities />
            <Guide />
            <Cart/>
            <div className="flex flex-col items-center lowercase">
                    {photo && (
                        <img
                            src={photo}
                            alt="Profile"
                            className="w-10 h-10 rounded-full mb-2" 
                        />
                    )}
                    {name && <div className="text-center font-bold">{name}</div>}
                </div>
                {isLoggedIn ? <Logout /> : <Login />}
          </div>
          
        ) : null}
      </div>
    </>
  );
}
