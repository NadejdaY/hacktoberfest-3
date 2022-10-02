import weatherBgSun from "../images/Background/BgCloudAndSun.png";///Обрезать
import weatherBgCloudly from "../images/Background/BgCloud.png";
import weatherBgRainAndSun from "../images/Background/BgCloud.png";
import weatherBgSmallRain from "../images/Background/BgCloud.png";
import weatherBgRain from "../images/Background/BgRain.png";
import weatherBgStorm from "../images/Background/BgStorm.png";
import weatherBgSnow from "../images/Background/BgSnow.png";

export const findWeatherBg = (id) => {
  if (id >= 200 && id <= 232) {
    return weatherBgRain;
  }
  if (id >= 300 && id <= 321) {
    return weatherBgSmallRain;
  }
  if (id >= 500 && id <= 504) {
    return weatherBgRainAndSun;
  }
  if (id >= 504 && id <= 531) {
    return weatherBgRain;
  }
  if (id >= 600 && id <= 623) {
    return weatherBgRain;
  }
  if (id >= 701 && id <= 781) {
    return weatherBgCloudly;
  }
  if (id === 800) {
    return weatherBgSun;
  }
  if (id >= 801 && id <= 804) {
    return weatherBgCloudly;
  }
};
