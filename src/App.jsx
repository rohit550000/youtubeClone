import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import VideoInfo from "./pages/VideoInfo";
import Header from "./components/homePageComponents/header/Header";
import FirstContextCompo from "./context/firstcontext/FirstContextCompo";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <FirstContextCompo>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<Searched />} />
            <Route path="/video/:id" element={<VideoInfo />} />
          </Routes>
        </FirstContextCompo>
      </BrowserRouter>
    </>
  );
};

export default App;
