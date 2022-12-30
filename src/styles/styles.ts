import styled from 'styled-components';

import { themes } from '@/styles/constants';
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
