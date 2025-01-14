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
import { FaCaretDown, FaCaretUp, FaPlus, FaRegStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);
  const [showSignOut, setShowSignOut] = useState(false);
  const [screenSize, setScreenSize] = useState("");
  const [showNavDropDown, setshowNavDropDown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    setShowSignOut(false);
    navigate("/");
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

      {userName && screenSize >= 900 && (
        <nav className="flex items-center gap-8 lg:gap-16">
          <div className="flex items-center gap-1">
            <img className="w-7" src="/images/home-icon.svg" alt="" />
            HOME
          </div>
          <div className="flex items-center gap-1">
            <img className="w-7" src="/images/search-icon.svg" alt="" />
            SEARCH
          </div>
          <div className="flex items-center gap-1">
            <img className="w-7" src="/images/watchlist-icon.svg" alt="" />
            WATCHLIST
          </div>
          <div className="flex items-center gap-1">
            <img className="w-7" src="/images/movie-icon.svg" alt="" />
            MOVIES
          </div>
          <div className="flex items-center gap-1">
            <img className="w-7" src="/images/original-icon.svg" alt="" />
            ORIGINALS
          </div>
        </nav>
      )}

      {userName && screenSize < 900 && (
        <div
          onMouseDown={() => setshowNavDropDown((prev) => !prev)}
          onMouseLeave={() => setshowNavDropDown(false)}
          className="flex items-center p-2 rounded font-semibold"
        >
          <div className="relative w-[150px] sm:w-[200px]">
            <div className="navSelect justify-between">
              <div className="flex items-center gap-3">
                <IoHomeOutline fontSize={20} /> HOME
              </div>
              <div className="cursor-pointer">
                {showNavDropDown ? <FaCaretUp /> : <FaCaretDown />}
              </div>
            </div>
            {showNavDropDown && (
              <div className="absolute z-50 top-10 bg-[#090b13] w-full">
                <div className="navSelect">
                  <FiSearch fontSize={20} /> SEARCH
                </div>
                <div className="navSelect">
                  <FaPlus fontSize={20} /> WATCHLIST
                </div>
                <div className="navSelect">
                  <MdOutlineMovieFilter fontSize={20} /> MOVIES
                </div>
                <div className="navSelect">
                  <FaRegStar fontSize={20} /> ORIGINALS
                </div>
              </div>
            )}
          </div>
        </div>
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
          onMouseDown={() => setShowSignOut(true)}
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
