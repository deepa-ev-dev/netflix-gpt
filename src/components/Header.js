import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
      <img
        className="w-32 md:w-40"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-8 h-8 rounded-full"
            src={user?.photoURL}
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className="text-sm md:text-base text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
