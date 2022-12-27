import clear from '@/assets/clear.png';
import cloudy from '@/assets/cloudy.png';
import cloudyTheme from '@/assets/cloudyTheme.jpg';
import drizzle from '@/assets/drizzle.png';
import freezingFog from '@/assets/freezing_fog.png';
import mist from '@/assets/mist.png';
import partlyCloudy from '@/assets/partlyCloudy.png';
import rain from '@/assets/rain.png';
import rainTheme from '@/assets/rainTheme.jpg';
import snow from '@/assets/snow.png';
import snowTheme from '@/assets/snowTheme.jpg';
import sun from '@/assets/sun.png';
import sunTheme from '@/assets/sunTheme.jpg';
import thunder from '@/assets/thunder.png';
import { Images, ImagesForHours, Themes } from '@/styles/interface';

export const images: Images = {
  rain,
  snow,
  sun,
  cloudy,
  'clear-day': clear,
  'partly-cloudy-day': partlyCloudy,
};

export const imagesForHours: ImagesForHours = {
  'Freezing fog': freezingFog,
  'Light snow': snow,
  'Heavy snow': snow,
  'Moderate snow': snow,
  Overcast: cloudy,
  Clear: clear,
  Mist: mist,
  'Partly cloudy': partlyCloudy,
  Sunny: sun,
  'Light rain shower': rain,
  'Patchy rain possible': rain,
  'Thundery outbreaks possible': thunder,
  'Patchy light drizzle': drizzle,
  Cloudy: cloudy,
  'Light freezing rain': drizzle,
  'Light drizzle': drizzle,
  'Moderate or heavy freezing rain': drizzle,
  'Light sleet': cloudy,
  Fog: mist,
};

export const themes: Themes = {
  sun: sunTheme,
  snow: snowTheme,
  rain: rainTheme,
  'Partly cloudy': cloudyTheme,
  Cloudy: cloudyTheme,
  'partly-cloudy-day': cloudyTheme,
  'clear-day': sunTheme,
  cloudy: cloudyTheme,
  'Freezing fog': rainTheme,
  'Light snow': snowTheme,
  'Heavy snow': snowTheme,
  'Moderate snow': snowTheme,
  Overcast: cloudyTheme,
  Clear: sunTheme,
  Mist: cloudyTheme,
  Sunny: sunTheme,
  'Light rain shower': rainTheme,
  'Patchy rain possible': rainTheme,
  'Thundery outbreaks possible': rainTheme,
  'Patchy light drizzle': rainTheme,
  'Light freezing rain': rainTheme,
  'Light drizzle': rainTheme,
  'Moderate or heavy freezing rain': rainTheme,
  'Light sleet': cloudyTheme,
  Fog: cloudyTheme,
};
