import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import CalendarEvents from '@/components/CalendarEvents';
import ErrorBoundary from '@/components/ErrorBoundary';
import GoogleCalendar from '@/components/GoogleCalendar';
import Location from '@/components/Location';
import WeatherInDays from '@/components/WeatherInDays';
import WeatherInHours from '@/components/WeatherInHours';
import WeatherToggler from '@/components/WeatherToggler';
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
            <WeatherToggler />
          </HeaderWrapper>
          <ContentWrapper>
            <CalendarEvents />
            <Location />
          </ContentWrapper>
          {weatherSwitch ? <WeatherInDays /> : <WeatherInHours />}
        </ThemeWrapper>
      </ErrorBoundary>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
