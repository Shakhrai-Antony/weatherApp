import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sun from '../assets/sun.png';

export const icons = [
  { id: 1, value: snow, property: 'snow' },
  { id: 2, value: rain, property: 'rain' },
  { id: 3, value: sun, property: 'sun' },
];

const currentDate = new Date();
export const todayDate = new Date(
  currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
)
  .toISOString()
  .split('T')[0];
export const lastDayDate = new Date(
  currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6),
)
  .toISOString()
  .split('T')[0];

export const uuid = () => {
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substring(2);
  return uniqueId;
};

export const currentHour = currentDate.getHours();
