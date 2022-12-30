import styled from 'styled-components';

import searchIcon from '@/assets/searchIcon.png';

export const CityWrapper = styled.div`
  @media (max-width: 690px) {
    margin-top: ${({ theme }) => theme.spaces[3]}px;
  }
  input {
    width: ${({ theme }) => (theme.sizes.width = 150)}px;
    padding: ${({ theme }) => theme.spaces[2]}px;
    box-sizing: border-box;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.lightSlateGray};
    border-radius: ${({ theme }) => (theme.sizes.borderRadius = 6)}px;
    outline-color: ${({ theme }) => theme.colors.sienna};
    font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: right 40px center;
  }
  margin-bottom: ${({ theme }) => theme.spaces[2]}px;
`;
