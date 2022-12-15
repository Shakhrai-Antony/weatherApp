import styled from 'styled-components';

import clear from '../assets/clear.png';
import cloudy from '../assets/cloudy.png';
import drizzle from '../assets/drizzle.png';
import freezingFog from '../assets/freezing_fog.png';
import mist from '../assets/mist.png';
import partlyCloudy from '../assets/partlyCloudy.png';
import rain from '../assets/rain.png';
import rainTheme from '../assets/rainTheme.jpg';
import snow from '../assets/snow.png';
import snowTheme from '../assets/snowTheme.jpg';
import sun from '../assets/sun.png';
import sunTheme from '../assets/sunTheme.jpg';
import thunder from '../assets/thunder.png';
import { Images, ImagesForHours, Themes } from '@/styles/interface';

const images: Images = {
  rain,
  snow,
  sun,
  cloudy,
  'clear-day': clear,
  'partly-cloudy-day': partlyCloudy,
};

const imagesForHours: ImagesForHours = {
  'Freezing fog': freezingFog,
  'Light snow': snow,
  'Heavy snow': snow,
  'Moderate snow': snow,
  Overcast: cloudy,
  Clear: clear,
  Mist: mist,
  'Partly cloudy': partlyCloudy,
  Sunny: sun,
  'Light rain shower': rain,
  'Patchy rain possible': rain,
  'Thundery outbreaks possible': thunder,
  'Patchy light drizzle': drizzle,
  Cloudy: cloudy,
};

const themes: Themes = {
  sun: sunTheme,
  snow: snowTheme,
  rain: rainTheme,
};

interface themeWrapper {
  currentTheme: string;
}

export const ThemeWrapper = styled.div<themeWrapper>`
  background-image: ${({ currentTheme }) => `url(${themes[currentTheme]})`};
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1160px) {
    height: 100%;
  } ;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1160px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    width: 375px;
    margin: 0 auto;
  } ;
`;

export const LogWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: rgba(108, 122, 137, 0.3);
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  width: auto;
  height: 200px;
  margin: 40px 0 0 40px;
  box-sizing: border-box;
  div {
    padding-left: 20px;
  }
  p {
    color: ${({ theme }) => theme.colors.defaultWhite};
    font-weight: bold;
    font-size: 20px;
    padding-right: 20px;
  }
  @media (max-width: 1160px) {
    margin: 40px 0 0 0;
  }
  @media (max-width: 550px) {
    flex-wrap: wrap;
    width: 375px;
  } ;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 40px 0 0;
  text-align: end;
  align-items: center;
  gap: 100px;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: rgba(108, 122, 137, 0.3);
  width: 600px;
  height: 200px;
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  img {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 1160px) {
    margin: 40px 0 0 0;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
    width: 375px;
    gap: 40px;
    padding: 5px 0 5px 0;
  } ;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 80px 0 0 0;
  padding: 0 75px 0 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    flex-direction: column;
    margin: 40px 0 0 0;
    justify-content: center;
    padding: 0 10px 0 10px;
    align-items: start;
  } ;
`;

export const EventsWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 650px) {
    width: 375px;
  } ;
`;
export const TimeWrapper = styled.span`
  background-color: rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.defaultWhite};
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
`;
export const ActionWrapper = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.colors.defaultWhite};
  width: 200px;
`;

export const CityWrapper = styled.div`
  input {
    width: 150px;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.lightSlateGray};
    border-radius: 6px;
    outline-color: ${({ theme }) => theme.colors.sienna};
    font-size: 20px;
  }
  @media (max-width: 650px) {
    margin-top: 20px;
  }

  margin-bottom: 10px;
`;

export const WeatherWrapper = styled.div`
  width: 1000px;
  margin: 70px auto 0;
  border: 1px solid #778899;
  border-radius: 15px;
  background-color: rgba(108, 122, 137, 0.6);
  text-align: center;
  @media (max-width: 1160px) {
    margin: 50px auto 0;
  }
  @media (max-width: 1050px) {
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin: 35px auto 0;
  }
  @media (max-width: 550px) {
    width: 350px;
    box-sizing: border-box;
  }
`;

export const DatesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  padding: 0 10px 0 10px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  margin: 5px 0 5px 0;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
  div {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    width: 67px;
  }
`;

export const WeatherIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-top: 30px;
  padding: 0 10px 0 10px;
  @media (max-width: 1050px) {
    flex-direction: column;
    margin: 10px 0 0 0;
    align-items: center;
  }
`;

export const WeatherImg = styled.div<{ icon: string }>`
  background-image: ${({ icon }) => `url(${images[icon]})`};
  width: 67px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  @media (max-width: 1050px) {
    margin: 10px 0 5px 0;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  padding: 0 10px 0 10px;
  margin-bottom: 15px;
  text-align: center;
  @media (max-width: 1050px) {
    flex-direction: column;
    margin: 5px 0 5px 0;
  }
  div {
    width: 67px;
  }
`;

export const WeatherTogglerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
  button {
    padding: 15px;
    border: transparent;
    border-radius: 15px;
    background-color: rgba(108, 122, 137, 0.6);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.defaultWhite};
    font-size: 20px;
    font-weight: bold;
  }
  button:hover {
    transform: scale(1.1);
  }
  @media (max-width: 550px) {
    gap 20px;
    button {
      font-size: 15px;
    }
  }
`;

export const HoursWrapper = styled.div`
  margin: 10px auto;
  color: ${({ theme }) => theme.colors.defaultWhite};
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  width: 100px;
`;
export const HoursIconsWrapper = styled.div<{ icon: string }>`
  background-image: ${({ icon }) => `url(${imagesForHours[icon]})`};
  width: 100px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  margin: 20px auto;
`;

export const TemperatureInHoursWrapper = styled.div`
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  padding: 0 10px 0 10px;
  margin: 20px auto 0;
  text-align: center;
  width: 100px;
`;
