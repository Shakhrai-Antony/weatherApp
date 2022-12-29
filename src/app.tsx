import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import CalendarEvents from '@/components/CalendarEvents';
import ErrorBoundary from '@/components/ErrorBoundary';
import GoogleCalendar from '@/components/GoogleCalendar';
import Location from '@/components/Location';
import WeatherSwitcher from '@/components/WeatherSwitcher';
import WeatherToggler from '@/components/WeatherToggler';
import { getCurrentTheme } from '@/store/selectors';
import { ContentWrapper, HeaderWrapper, ThemeWrapper } from '@/styles/styles';
import GlobalStyle from '@/theme/globalStyle';
import baseTheme from '@/theme/theme';

const App = () => {
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
          <WeatherSwitcher />
        </ThemeWrapper>
      </ErrorBoundary>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
