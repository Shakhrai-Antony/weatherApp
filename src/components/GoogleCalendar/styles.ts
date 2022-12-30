import styled from 'styled-components';

import baseTheme from '@/theme/theme';

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
