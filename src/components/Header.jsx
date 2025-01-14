import React, { useEffect, useRef, useState } from "react";
import { auth, provider } from "../config/Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../redux/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);
  const [showSignOut, setShowSignOut] = useState(false);

  useEffect(() => {
    if (userName) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [userName]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      setUser(response.user);
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    setShowSignOut(false);
    await auth.signOut();
    setSignOutState();
  };

  return (
    <header className="absolute text-white flex items-center justify-between top-0 bg-[#090b13] w-full overflow-x-scrolly p-4">
      <img
        onClick={() => navigate("/")}
        src={"/images/logo.svg"}
        className="w-24 cursor-pointer"
        alt="Disney Logo"
      />

      {userName && (
        <nav className="flex items-center gap-16">
          <a
            className="flex items-center gap-2 font-semibold tracking-wider"
            href="/home"
          >
            <img className="w-7" src="/images/home-icon.svg" alt="" />
            HOME
          </a>
          <a
            className="flex items-center gap-2 font-semibold tracking-wider"
            href="/search"
          >
            <img className="w-7" src="/images/search-icon.svg" alt="" />
            SEARCH
          </a>
          <a
            className="flex items-center gap-2 font-semibold tracking-wider"
            href="/watchlist"
          >
            <img className="w-7" src="/images/watchlist-icon.svg" alt="" />
            WATCHLIST
          </a>
          <a
            className="flex items-center gap-2 font-semibold tracking-wider"
            href="/movies"
          >
            <img className="w-7" src="/images/movie-icon.svg" alt="" />
            MOVIES
          </a>
          <a
            className="flex items-center gap-2 font-semibold tracking-wider"
            href="/originals"
          >
            <img className="w-7" src="/images/original-icon.svg" alt="" />
            ORIGINALS
          </a>
        </nav>
      )}

      {!userName ? (
        <button
          onClick={handleAuth}
          className="border p-2 rounded font-semibold px-4 tracking-wider hover:bg-[#f9f9f9] hover:text-[#090b13]"
        >
          LOGIN
        </button>
      ) : (
        <div
          onMouseEnter={() => setShowSignOut(true)}
          onMouseLeave={() => setShowSignOut(false)}
          className="flex flex-col"
        >
          <img src={userPhoto} className="w-12 h-12 rounded-full" alt="" />

          {showSignOut && (
            <button
              onClick={handleSignOut}
              className="border absolute top-[65px] p-2 rounded font-semibold right-4 z-50 bg-[#090b13]"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
