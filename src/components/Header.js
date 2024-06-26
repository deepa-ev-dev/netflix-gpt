import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { SUPPORTED_LANGUAGES, logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribes when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
   dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute top-0 left-0 w-full md:w-screen flex justify-between items-center px-4 md:px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
      <img className="w-32 md:w-40" alt="logo" src={logo} />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (<select className="p-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            
          </select>)}
          <button
            className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div
            className="relative flex items-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img className="w-8 h-8" src={user?.photoURL} alt="user" />
            {isHovered && (
              <div className="absolute top-full mt-2 right-0 p-4 max-w-sm rounded shadow-lg z-20">
                <Profile user={user} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
