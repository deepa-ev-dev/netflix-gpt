import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="w-60 bg-black rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full"
          src={user?.photoURL}
          alt="user"
        />
        <p className="ml-4 text-lg font-semibold text-white">{user?.displayName}</p>
      </div>
      <hr className="border-gray-300 mb-4" />
      <button
        onClick={handleSignOut}
        className="text-base bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md w-full"
      >
        Sign Out of Netflix
      </button>
    </div>
  );
};

export default Profile;
