import styled from 'styled-components';

export const WeatherTogglerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => (theme.sizes.gap = 40)}px;
  margin-top: ${({ theme }) => theme.spaces[6]}px;
  button {
    padding: ${({ theme }) => theme.spaces[3]}px;
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
