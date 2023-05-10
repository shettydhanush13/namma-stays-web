import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Homestay from './Pages/Homestay'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/homestay/*" element={<Homestay/>}/>
        <Route exact path="/*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
