import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../WeatherInHours/swiperSlider.scss';
import {
  DatesWrapper,
  TemperatureWrapper,
  WeatherIconsWrapper,
  WeatherImg,
} from '@/components/WeatherInDays/styles';
import {
  temperatureForSevenDays,
  weatherForSevenDates,
  weatherIconsForSevenDates,
} from '@/store/selectors';

const WeatherInDays = () => {
  const dates = useSelector(weatherForSevenDates);
  const icons = useSelector(weatherIconsForSevenDates);
  const temperature = useSelector(temperatureForSevenDays);
  const data = [
    { id: 1, date: dates[0], icon: icons[0], temperature: temperature[0] },
    { id: 2, date: dates[1], icon: icons[1], temperature: temperature[1] },
    { id: 3, date: dates[2], icon: icons[2], temperature: temperature[2] },
    { id: 4, date: dates[3], icon: icons[3], temperature: temperature[3] },
    { id: 5, date: dates[4], icon: icons[4], temperature: temperature[4] },
    { id: 6, date: dates[5], icon: icons[5], temperature: temperature[5] },
    { id: 7, date: dates[6], icon: icons[6], temperature: temperature[6] },
  ];
  return dates.length > 1 ? (
    <Swiper
      className="swiper__slider"
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={4}
      pagination={{ clickable: false }}
      slidesPerGroup={4}
      breakpoints={{
        1200: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 8,
          slidesPerGroup: 3,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 6,
          slidesPerGroup: 2,
        },
        325: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      }}
    >
      {data.map(({ id, date, icon, temperature }) => (
        <SwiperSlide key={id}>
          <DatesWrapper>{date}</DatesWrapper>
          <WeatherIconsWrapper>
            <WeatherImg icon={icon} />
          </WeatherIconsWrapper>
          <TemperatureWrapper>{temperature}C</TemperatureWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
};

export default WeatherInDays;
