import React from "react";
import { findWeatherIcon } from "../../hooks/findWeatherIcon";
import { SwiperSlide } from "swiper/react";
import moment from "moment";
import 'moment/locale/ru'
moment.locale("ru");

export function DailyForecastCard({ data }) {
  let weekDay = moment(data.datetime).format('dddd').split('');
  weekDay[0] = weekDay[0].toUpperCase();
  weekDay.join('');
  return (
    <SwiperSlide className="weather-mini-card">
      <p className="weather-mini-card__week-day">
        {weekDay}
      </p>
      <p className="weather-mini-card__date">{moment(data.datetime).format('DD.MM')}</p>
      <img
        src={findWeatherIcon(data.weather.code)}
        alt="icon"
        className="weather-mini-card__icon"
      />
      <p className="weather-mini-card__day-temperature">
        {Math.round(data.max_temp)} &deg;
      </p>
      <p className="weather-mini-card__night-temperature">
        {Math.round(data.min_temp)} &deg;
      </p>
      <div className="weather-mini-card__precipitation">
        {data.weather.description}
      </div>
    </SwiperSlide>
  );
}

export default DailyForecastCard;
