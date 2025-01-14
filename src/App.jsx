import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import { useSelector } from "react-redux";
import { selectUserName } from "./redux/userSlice";

const App = () => {
  const userName = useSelector(selectUserName);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={userName ? <HomePage /> : <Login />} />
          <Route
            path="/details/:title/:id"
            element={userName ? <DetailsPage /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
