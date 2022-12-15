import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sun from '../assets/sun.png';

export const icons = [
  { id: 1, value: snow, property: 'snow' },
  { id: 2, value: rain, property: 'rain' },
  { id: 3, value: sun, property: 'sun' },
];

const today = new Date();
export const todayDate =
  today.getFullYear() +
  '-' +
  (today.getMonth() + 1) +
  '-' +
  (today.getDate() > 9 ? today.getDate() : '0' + today.getDate());

const lastDay = new Date();
export const lastDayDate =
  lastDay.getFullYear() +
  '-' +
  (lastDay.getMonth() + 1) +
  '-' +
  (lastDay.getDate() + 6 > 9
    ? lastDay.getDate() + 6
    : '0' + lastDay.getDate() + 6);

export const uuid = () => {
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substring(2);
  return uniqueId;
};
