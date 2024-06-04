import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonCLick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign in /Sign up logic

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-2041-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative w-full max-w-md bg-black bg-opacity-75 p-8 sm:p-16 rounded-md shadow-md text-white"
        >
          <h1 className="text-3xl font-bold py-4 mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="py-2 px-4 mb-4 w-full bg-gray-700 bg-opacity-75 border border-gray-600 rounded focus:outline-none focus:border-red-500"
          />
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className="py-2 px-4 mb-4 w-full bg-gray-700 bg-opacity-75 border border-gray-600 rounded focus:outline-none focus:border-red-500"
            />
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-2 px-4 mb-6 w-full bg-gray-700 bg-opacity-75 border border-gray-600 rounded focus:outline-none focus:border-red-500"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="py-2 bg-red-700 hover:bg-red-600 w-full rounded text-white font-semibold"
            onClick={handleButtonCLick}
          >
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
