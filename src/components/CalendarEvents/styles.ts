import styled from 'styled-components';

import baseTheme from '@/theme/theme';

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
  padding: ${({ theme }) => theme.spaces[4]}px;
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 10)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  font-weight: bold;
`;
export const ActionWrapper = styled.span`
  padding: ${({ theme }) => theme.spaces[4]}px;
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 10)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 25)}px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.customBackgroundColor};
  color: ${({ theme }) => theme.colors.defaultWhite};
  width: ${({ theme }) => (theme.sizes.width = 400)}px;
  text-align: center;
  word-wrap: break-word;
`;
