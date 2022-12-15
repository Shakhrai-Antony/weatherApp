import React from 'react';
import { useDispatch } from 'react-redux';

import { icons } from '@/constants';
import { setCurrentTheme } from '@/store/mainReducer';
import { IconsWrapper } from '@/styles/styles';

const ThemeToggler = () => {
  const dispatch = useDispatch();

  const themeToggle = (property: string) => () => {
    dispatch(setCurrentTheme(property));
  };

  return (
    <IconsWrapper>
      {icons.map(({ id, value, property }) => (
        <button
          type="button"
          key={id}
          onClick={themeToggle(property)}
          onKeyDown={themeToggle(property)}
          onKeyPress={themeToggle(property)}
          id={'themeSwitcher' + id}
        >
          <img src={value} alt={value} />
        </button>
      ))}
    </IconsWrapper>
  );
};

export default ThemeToggler;
