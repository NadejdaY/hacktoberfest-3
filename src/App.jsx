import React, { useEffect } from "react";
import "./style/main.scss";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Header from "./components/Header/Header";
import MainPage from "./pages/Main/MainPage";
import {Routes, Route} from "react-router-dom";
import CountryWeatherPage from "./pages/CountryWeather/CountryWeatherPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:place" element={<CountryWeatherPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
