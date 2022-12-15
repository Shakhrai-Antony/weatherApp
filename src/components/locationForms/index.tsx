import React from 'react';
import { useDispatch } from 'react-redux';

import { setCity } from '@/store/mainReducer';
import { CityWrapper } from '@/styles/styles';

interface Icity {
  handleChange: () => void;
  value: string;
}

const City = ({ handleChange, value }: Icity) => {
  const dispatch = useDispatch();

  const onBlurSetCity = (city: string) => () => {
    dispatch(setCity(city));
  };

  return (
    <CityWrapper>
      <input
        type="text"
        name="city"
        value={value}
        placeholder="City"
        onChange={handleChange}
        onBlur={onBlurSetCity(value)}
        id="city"
        data-testid="city"
      />
    </CityWrapper>
  );
};

export default City;
