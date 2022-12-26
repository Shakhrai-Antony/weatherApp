import styled from 'styled-components';

import searchIcon from '@/assets/searchIcon.png';
import { images, imagesForHours, themes } from '@/styles/constants';
import { themeWrapper } from '@/styles/interface';

export const ThemeWrapper = styled.div<themeWrapper>`
  background-image: ${({ currentTheme }) => `url(${themes[currentTheme]})`};
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
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
    width: ${({ theme }) => (theme.sizes.width = 375)}px;
    margin: 0 auto;
  } ;
`;

export const LogWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.customBackgroundColor};
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  width: auto;
  height: ${({ theme }) => (theme.sizes.height = 120)}px;
  margin: 40px 0 0 40px;
  box-sizing: border-box;
  div {
    padding: 0 20px 0 20px;
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
    width: ${({ theme }) => (theme.sizes.width = 375)}px;
  } ;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 80px 0 0 0;
  padding: 0 35px 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 830px) {
    padding: 0 5px 0 5px;
  }
  @media (max-width: 690px) {
    flex-direction: column;
    margin: 40px 0 0 0;
    justify-content: center;
    padding: 0 10px 0 10px;
    align-items: start;
  }
`;

export const EventsWrapper = styled.div`
  width: ${({ theme }) => (theme.sizes.width = 800)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 1030px) {
    justify-content: start;
    gap: 20px;
    max-width: 500px;
  }
  @media (max-width: 650px) {
    width: 350px;
  } ;
`;
export const TimeWrapper = styled.span`
  background-color: ${({ theme }) => theme.colors.customBackgroundColor};
  color: ${({ theme }) => theme.colors.defaultWhite};
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
`;
export const ActionWrapper = styled.span`
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.customBackgroundColor};
  color: ${({ theme }) => theme.colors.defaultWhite};
  width: ${({ theme }) => (theme.sizes.width = 400)}px;
  text-align: center;
  word-wrap: break-word;
`;

export const CityWrapper = styled.div`
  @media (max-width: 690px) {
    margin-top: 20px;
  }
  input {
    width: ${({ theme }) => (theme.sizes.width = 150)}px;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.lightSlateGray};
    border-radius: 6px;
    outline-color: ${({ theme }) => theme.colors.sienna};
    font-size: 20px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: right 45px center;
  }
  margin-bottom: 10px;
`;

export const WeatherIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-top: 35px;
`;

export const WeatherImg = styled.div<{ icon: string }>`
  background-image: ${({ icon }) => `url(${images[icon]})`};
  width: ${({ theme }) => (theme.sizes.width = 67)}px;
  height: ${({ theme }) => (theme.sizes.height = 50)}px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-top: 35px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  div {
    width: ${({ theme }) => (theme.sizes.width = 67)}px;
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
    background-color: ${({ theme }) => theme.colors.customBackgroundColor};;
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
  background-color: ${({ theme }) => theme.colors.customBackgroundBlack};
  border-radius: 10px;
  padding: 10px;
  width: ${({ theme }) => (theme.sizes.width = 100)}px;
`;
export const DatesWrapper = styled(HoursWrapper)``;
export const HoursIconsWrapper = styled.div<{ icon: string }>`
  background-image: ${({ icon }) => `url(${imagesForHours[icon]})`};
  width: ${({ theme }) => (theme.sizes.width = 100)}px;
  height: ${({ theme }) => (theme.sizes.width = 80)}px;
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
  padding: 0 10px 0 10px;
  margin: 20px auto 0;
  text-align: center;
  width: ${({ theme }) => (theme.sizes.width = 100)}px;
`;

export const ErrorWrapper = styled.h2`
  color: ${({ theme }) => theme.colors.tomato};
`;
