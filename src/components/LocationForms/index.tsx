import { AutoComplete, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Icity } from '@/components/LocationForms/interface';
import { setCity } from '@/store/mainReducer';
import { CityWrapper } from '@/styles/styles';

const cities = [
  { label: 'Minsk', value: 'Minsk' },
  { label: 'Moscow', value: 'Moscow' },
  { label: 'Grodno', value: 'Grodno' },
  { label: 'Gomel', value: 'Gomel' },
  { label: 'Vitebsk', value: 'Vitebsk' },
  { label: 'Brest', value: 'Brest' },
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Madrid', value: 'Madrid' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Saint-Petersburg', value: 'Saint-Petersburg' },
  { label: 'Paris', value: 'Paris' },
  { label: 'Istanbul', value: 'Istanbul' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Andorra la Vella', value: 'Andorra la Vella' },
  { label: 'Athens', value: 'Athens' },
  { label: 'Belgrade', value: 'Belgrade' },
  { label: 'Bern', value: 'Bern' },
  { label: 'Bratislava', value: 'Bratislava' },
  { label: 'Brussels', value: 'Brussels' },
  { label: 'Bucharest', value: 'Bucharest' },
  { label: 'Budapest', value: 'Budapest' },
  { label: 'Chisinau', value: 'Chisinau' },
  { label: 'Copenhagen', value: 'Copenhagen' },
  { label: 'Dublin', value: 'Dublin' },
  { label: 'Helsinki', value: 'Helsinki' },
  { label: 'Kiev', value: 'Kiev' },
  { label: 'Lisbon', value: 'Lisbon' },
  { label: 'Ljubljana', value: 'Ljubljana' },
  { label: 'London', value: 'London' },
  { label: 'Luxembourg', value: 'Luxembourg' },
  { label: 'Monaco', value: 'Monaco' },
  { label: 'Nicosia', value: 'Nicosia' },
  { label: 'Nuuk', value: 'Nuuk' },
  { label: 'Oslo', value: 'Oslo' },
  { label: 'Podgorica', value: 'Podgorica' },
  { label: 'Prague', value: 'Prague' },
  { label: 'Reykjavik', value: 'Reykjavik' },
  { label: 'Riga', value: 'Riga' },
  { label: 'Rome', value: 'Rome' },
  { label: 'San Marino', value: 'San Marino' },
  { label: 'Sarajevo', value: 'Sarajevo' },
  { label: 'Skopje', value: 'Skopje' },
  { label: 'Sofia', value: 'Sofia' },
  { label: 'Stockholm', value: 'Stockholm' },
  { label: 'Tallinn', value: 'Tallinn' },
  { label: 'Tirana', value: 'Tirana' },
  { label: 'Vaduz', value: 'Vaduz' },
  { label: 'Valletta', value: 'Valletta' },
  { label: 'Vatican City', value: 'Vatican City' },
  { label: 'Vienna', value: 'Vienna' },
  { label: 'Vilnius', value: 'Vilnius' },
  { label: 'Warsaw', value: 'Warsaw' },
  { label: 'Zagreb', value: 'Zagreb' },
  { label: 'Tbilisi', value: 'Tbilisi' },
  { label: 'Erevan', value: 'Erevan' },
  { label: 'New York', value: 'New York' },
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Los-Angeles', value: 'Los-Angeles' },
  { label: 'Ottawa', value: 'Ottawa' },
];

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

export default City;
