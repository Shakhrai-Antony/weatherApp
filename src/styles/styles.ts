import styled from 'styled-components';

import searchIcon from '@/assets/searchIcon.png';
import { images, imagesForHours, themes } from '@/styles/constants';
import { themeWrapper } from '@/styles/interface';
import baseTheme from '@/theme/theme';

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
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 15)}px;
  background-color: ${({ theme }) => theme.colors.customBackgroundColor};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => (theme.sizes.gap = 40)}px;
  align-items: center;
  width: auto;
  height: ${({ theme }) => (theme.sizes.height = 120)}px;
  margin: ${baseTheme.spaces[6]}px ${baseTheme.spaces[0]}px
    ${baseTheme.spaces[0]}px ${baseTheme.spaces[6]}px;
  box-sizing: border-box;
  div {
    padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[3]}px
      ${baseTheme.spaces[0]}px ${baseTheme.spaces[3]}px;
  }
  p {
    color: ${({ theme }) => theme.colors.defaultWhite};
    font-weight: bold;
    font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
    padding-right: ${({ theme }) => theme.spaces[3]}px;
  }
  @media (max-width: 1160px) {
    margin: ${baseTheme.spaces[6]}px ${baseTheme.spaces[0]}px
      ${baseTheme.spaces[0]}px ${baseTheme.spaces[0]}px;
    gap: ${({ theme }) => (theme.sizes.gap = 20)}px;
  }
  @media (max-width: 550px) {
    flex-wrap: wrap;
    width: ${({ theme }) => (theme.sizes.width = 375)}px;
  } ;
`;

export const UserWrapper = styled.p`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-weight: bold;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  padding-right: ${({ theme }) => theme.spaces[3]}px;
`;

export const UserDateWrapper = styled(UserWrapper)``;

export const UserTimeWrapper = styled(UserWrapper)``;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: ${baseTheme.spaces[9]}px ${baseTheme.spaces[0]}px
    ${baseTheme.spaces[0]}px ${baseTheme.spaces[0]}px;
  padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[6]}px
    ${baseTheme.spaces[0]}px ${baseTheme.spaces[6]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 830px) {
    padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[1]}px
      ${baseTheme.spaces[0]}px ${baseTheme.spaces[1]}px;
  }
  @media (max-width: 690px) {
    flex-direction: column;
    margin: ${baseTheme.spaces[7]}px ${baseTheme.spaces[0]}px
      ${baseTheme.spaces[0]}px ${baseTheme.spaces[0]}px;
    justify-content: center;
    padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[2]}px
      ${baseTheme.spaces[0]}px ${baseTheme.spaces[2]}px;
    align-items: start;
  }
`;

export const EventsWrapper = styled.div`
  width: ${({ theme }) => (theme.sizes.width = 800)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${baseTheme.spaces[2]}px;
  @media (max-width: 1030px) {
    justify-content: start;
    gap: ${({ theme }) => (theme.sizes.gap = 20)}px;
    max-width: 500px;
  }
  @media (max-width: 650px) {
    width: ${({ theme }) => (theme.sizes.width = 350)}px;
  } ;
`;
export const TimeWrapper = styled.span`
  background-color: ${({ theme }) => theme.colors.customBackgroundColor};
  color: ${({ theme }) => theme.colors.defaultWhite};
  padding: ${({ theme }) => theme.spaces[3]}px;
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 10)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  font-weight: bold;
`;
export const ActionWrapper = styled.span`
  padding: ${({ theme }) => theme.spaces[3]}px;
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 10)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 25)}px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.customBackgroundColor};
  color: ${({ theme }) => theme.colors.defaultWhite};
  width: ${({ theme }) => (theme.sizes.width = 400)}px;
  text-align: center;
  word-wrap: break-word;
`;

export const CityWrapper = styled.div`
  @media (max-width: 690px) {
    margin-top: ${({ theme }) => theme.spaces[3]}px;
  }
  input {
    width: ${({ theme }) => (theme.sizes.width = 150)}px;
    padding: ${({ theme }) => theme.spaces[1]}px;
    box-sizing: border-box;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.lightSlateGray};
    border-radius: ${({ theme }) => (theme.sizes.borderRadius = 6)}px;
    outline-color: ${({ theme }) => theme.colors.sienna};
    font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: right 45px center;
  }
  margin-bottom: ${({ theme }) => theme.spaces[2]}px;
`;

export const WeatherIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-top: ${({ theme }) => theme.spaces[5]}px;
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
  margin-top: ${({ theme }) => theme.spaces[5]}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
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
  gap: ${({ theme }) => (theme.sizes.gap = 40)}px;
  margin-top: ${({ theme }) => theme.spaces[6]}px;
  button {
    padding: ${({ theme }) => theme.spaces[2]}px;
    border: transparent;
    border-radius: ${({ theme }) => (theme.sizes.borderRadius = 15)}px;
    background-color: ${({ theme }) => theme.colors.customBackgroundColor};;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.defaultWhite};
    font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
    font-weight: bold;
  }
  button:hover {
    transform: scale(1.1);
  }
  @media (max-width: 550px) {
    gap ${({ theme }) => (theme.sizes.gap = 20)}px;
    button {
      font-size: ${({ theme }) => (theme.sizes.fontSize = 15)}px;
    }
  }
`;

export const HoursWrapper = styled.div`
  margin: 10px auto;
  color: ${({ theme }) => theme.colors.defaultWhite};
  background-color: ${({ theme }) => theme.colors.customBackgroundBlack};
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 10)}px;
  padding: ${({ theme }) => theme.spaces[1]}px;
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
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  font-weight: bold;
  padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[2]}px
    ${baseTheme.spaces[0]}px ${baseTheme.spaces[2]}px;
  margin: 20px auto 0;
  text-align: center;
  width: ${({ theme }) => (theme.sizes.width = 100)}px;
`;

export const ErrorWrapper = styled.h2`
  color: ${({ theme }) => theme.colors.tomato};
`;
