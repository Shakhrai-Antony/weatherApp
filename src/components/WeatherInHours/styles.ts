import styled from 'styled-components';

import { imagesForHours } from '@/styles/constants';
import baseTheme from '@/theme/theme';

export const HoursWrapper = styled.div`
  margin: 10px auto;
  color: ${({ theme }) => theme.colors.defaultWhite};
  background-color: ${({ theme }) => theme.colors.customBackgroundBlack};
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 10)}px;
  padding: ${({ theme }) => theme.spaces[1]}px;
  width: ${({ theme }) => (theme.sizes.width = 100)}px;
`;
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
