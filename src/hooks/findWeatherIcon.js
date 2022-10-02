import weatherIconSun from "../images/WetherIcons/IconSun.svg";
import weatherIconCloudly from "../images/WetherIcons/IconCloudly.svg";
import weatherIconRainAndSun from "../images/WetherIcons/IconRainAndSun.svg";
import weatherIconSmallRain from "../images/WetherIcons/IconSmallRain.svg";
import weatherIconRain from "../images/WetherIcons/IconRain.svg";

export const findWeatherIcon = (id) => {
  if (id >= 200 && id <= 232) {
    return weatherIconRain;
  }
  if (id >= 300 && id <= 321) {
    return weatherIconSmallRain;
  }
  if (id >= 500 && id <= 504) {
    return weatherIconRainAndSun;
  }
  if (id >= 504 && id <= 531) {
    return weatherIconRain;
  }
  if (id >= 600 && id <= 623) {
    return weatherIconRain;
  }
  if (id >= 701 && id <= 781) {
    return weatherIconCloudly;
  }
  if (id === 800) {
    return weatherIconSun;
  }
  if (id >= 801 && id <= 804) {
    return weatherIconCloudly;
  }
};
