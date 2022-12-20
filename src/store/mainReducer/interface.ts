export interface MainReducer {
  theme: string;
  currentUser: string;
  calendarItems: Array<[]>;
  city: string;
  weatherInDays: Array<[]>;
  weatherInHours: Array<[]>;
  weatherSwitcher: boolean;
  time: string;
  date: string;
  weatherInDaysError: string;
  weatherInHoursError: string;
}
