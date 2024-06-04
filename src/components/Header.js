import React, { useState } from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
      <img
        className="w-32 md:w-40"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="w-8 h-8"
            src={user?.photoURL}
            alt="user"
          />
          {isHovered && (
            <div className="absolute top-full mt-2 right-0 p-4 max-w-sm rounded shadow-lg z-20">
              <Profile user={user} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
