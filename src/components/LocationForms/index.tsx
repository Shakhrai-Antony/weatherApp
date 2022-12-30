import { AutoComplete, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Icity } from '@/components/LocationForms/interface';
import { CityWrapper } from '@/components/LocationForms/styles';
import { cities } from '@/constants';
import { setCity } from '@/store/mainReducer';

const City = ({ handleChange, value }: Icity) => {
  const dispatch = useDispatch();

  const onBlurSetCity = (city: string) => () => {
    dispatch(setCity(city));
  };

  return (
    <CityWrapper>
      <AutoComplete
        options={cities}
        filterOption
        value={value}
        onChange={handleChange}
        onBlur={onBlurSetCity(value)}
        style={{ width: 200, padding: 5 }}
        id="city"
      >
        <Input placeholder="City" />
      </AutoComplete>
    </CityWrapper>
  );
};

export default React.memo(City);
