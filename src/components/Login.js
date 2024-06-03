import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <div className="relative flex-1 flex items-center justify-center">
        <img
          alt="netflix"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <form className="relative w-full max-w-md bg-black bg-opacity-75 p-8 sm:p-16 rounded-md shadow-md text-white">
          <h1 className="text-3xl font-bold py-4 mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="py-2 px-4 mb-4 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Username"
              className="py-2 px-4 mb-4 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 mb-6 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500"
          />
          <button className="py-3 bg-red-700 hover:bg-red-600 w-full rounded text-white font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center text-white py-4">
            {isSignInForm ? (
              <>
                New to Netflix?{" "}
                <span
                  className="text-red-500 hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign up now
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-red-500 hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign in here
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;