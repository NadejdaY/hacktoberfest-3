import React from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../../components/DailyForecast/DailyForecast";

function CountryWeatherPage() {
  return (
    <>
      <CurrentWeather />
      <DailyForecast />
    </>
  );
}

export default CountryWeatherPage;
