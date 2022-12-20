import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiperSlider.scss';
import {
  getCurrentUser,
  getIconsForWeatherInHours,
  getWeatherHours,
  getWeatherTemperatureInHours,
} from '@/store/selectors';
import {
  HoursIconsWrapper,
  HoursWrapper,
  TemperatureInHoursWrapper,
} from '@/styles/styles';

const WeatherInHours = () => {
  const hours = useSelector(getWeatherHours);
  const tempInHours = useSelector(getWeatherTemperatureInHours);
  const iconsForHours = useSelector(getIconsForWeatherInHours);
  const user = useSelector(getCurrentUser);
  const data = [
    {
      id: 1,
      hour: hours[0],
      icon: iconsForHours[0],
      temperature: tempInHours[0],
    },
    {
      id: 2,
      hour: hours[1],
      icon: iconsForHours[1],
      temperature: tempInHours[1],
    },
    {
      id: 3,
      hour: hours[2],
      icon: iconsForHours[2],
      temperature: tempInHours[2],
    },
    {
      id: 4,
      hour: hours[3],
      icon: iconsForHours[3],
      temperature: tempInHours[3],
    },
    {
      id: 5,
      hour: hours[4],
      icon: iconsForHours[4],
      temperature: tempInHours[4],
    },
    {
      id: 6,
      hour: hours[5],
      icon: iconsForHours[5],
      temperature: tempInHours[5],
    },
    {
      id: 7,
      hour: hours[6],
      icon: iconsForHours[6],
      temperature: tempInHours[6],
    },
    {
      id: 8,
      hour: hours[7],
      icon: iconsForHours[7],
      temperature: tempInHours[7],
    },
    {
      id: 9,
      hour: hours[8],
      icon: iconsForHours[8],
      temperature: tempInHours[8],
    },
    {
      id: 10,
      hour: hours[9],
      icon: iconsForHours[9],
      temperature: tempInHours[9],
    },
    {
      id: 11,
      hour: hours[10],
      icon: iconsForHours[10],
      temperature: tempInHours[10],
    },
    {
      id: 12,
      hour: hours[11],
      icon: iconsForHours[11],
      temperature: tempInHours[11],
    },
    {
      id: 13,
      hour: hours[12],
      icon: iconsForHours[12],
      temperature: tempInHours[12],
    },
    {
      id: 14,
      hour: hours[13],
      icon: iconsForHours[13],
      temperature: tempInHours[13],
    },
    {
      id: 15,
      hour: hours[14],
      icon: iconsForHours[14],
      temperature: tempInHours[14],
    },
    {
      id: 16,
      hour: hours[15],
      icon: iconsForHours[15],
      temperature: tempInHours[15],
    },
    {
      id: 17,
      hour: hours[16],
      icon: iconsForHours[16],
      temperature: tempInHours[16],
    },
    {
      id: 18,
      hour: hours[17],
      icon: iconsForHours[17],
      temperature: tempInHours[17],
    },
    {
      id: 19,
      hour: hours[18],
      icon: iconsForHours[18],
      temperature: tempInHours[18],
    },
    {
      id: 20,
      hour: hours[19],
      icon: iconsForHours[19],
      temperature: tempInHours[19],
    },
    {
      id: 21,
      hour: hours[20],
      icon: iconsForHours[20],
      temperature: tempInHours[20],
    },
    {
      id: 22,
      hour: hours[21],
      icon: iconsForHours[21],
      temperature: tempInHours[21],
    },
    {
      id: 23,
      hour: hours[22],
      icon: iconsForHours[22],
      temperature: tempInHours[22],
    },
    {
      id: 24,
      hour: hours[23],
      icon: iconsForHours[23],
      temperature: tempInHours[23],
    },
  ];

  return user ? (
    <Swiper
      className="swiper__slider"
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={4}
      navigation={{ clickable: true }}
      pagination={{ clickable: false }}
      slidesPerGroup={4}
      breakpoints={{
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 8,
          slidesPerGroup: 3,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 6,
          slidesPerGroup: 2,
        },
        325: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      }}
    >
      {data.map(({ id, hour, icon, temperature }) => (
        <SwiperSlide key={id}>
          <HoursWrapper>{hour}</HoursWrapper>
          <HoursIconsWrapper icon={icon} />
          <TemperatureInHoursWrapper>{temperature}C</TemperatureInHoursWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
};

export default WeatherInHours;
