import styled from 'styled-components';

import { HoursWrapper } from '@/components/WeatherInHours/styles';
import { images } from '@/styles/constants';

export const WeatherIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-top: ${({ theme }) => theme.spaces[5]}px;
`;

export const DatesWrapper = styled(HoursWrapper)``;

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
