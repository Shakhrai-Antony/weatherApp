import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Location from '@/components/Location';
import CalendarEvents from '@/components/calendarEvents';
import ErrorBoundary from '@/components/errorBoundary';
import GoogleCalendar from '@/components/googleCalendar';
import ThemeToggler from '@/components/switchTheme';
import WeatherInDays from '@/components/weatherInDays';
import WeatherInHours from '@/components/weatherInHours';
import WeatherToggler from '@/components/weatherToggler';
import { getCurrentTheme, getWeatherSwitch } from '@/store/selectors';
import { ContentWrapper, HeaderWrapper, ThemeWrapper } from '@/styles/styles';
import GlobalStyle from '@/theme/globalStyle';
import baseTheme from '@/theme/theme';

const App = () => {
  const weatherSwitch = useSelector(getWeatherSwitch);
  const currentTheme = useSelector(getCurrentTheme);

  return (
    <ThemeProvider theme={baseTheme}>
      <ErrorBoundary>
        <ThemeWrapper currentTheme={currentTheme}>
          <HeaderWrapper>
            <GoogleCalendar />
            <ThemeToggler />
          </HeaderWrapper>
          <ContentWrapper>
            <CalendarEvents />
            <Location />
          </ContentWrapper>
          <WeatherToggler />
          {weatherSwitch ? <WeatherInDays /> : <WeatherInHours />}
        </ThemeWrapper>
      </ErrorBoundary>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
