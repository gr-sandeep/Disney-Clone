import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details/:title/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
