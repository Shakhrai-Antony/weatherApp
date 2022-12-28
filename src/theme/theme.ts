import { DefaultTheme } from 'styled-components';

const baseTheme: DefaultTheme = {
  colors: {
    dark: '#1c1c1c',
    defaultWhite: '#fff',
    defaultBlack: '#000',
    lightGrey: '#a9a9a9',
    darkGrey: '#696969',
    sienna: '#A0522D',
    tomato: '#FF6347',
    lightSlateGray: '#778899',
    lavender: '#E6E6FA',
    grayishBlue: '#282c34',
    customBackgroundColor: '#6c7a89cc',
    customBackgroundBlack: '#00000099',
  },
  sizes: {
    width: 42 || 67 || 70 || 100 || 150 || 350 || 375 || 400 || 700 || 800,
    height: 42 || 50 || 80 || 120,
    gap: 20 || 40,
    borderRadius: 6 || 10 || 15,
    fontSize: 15 || 20 || 25,
  },
  spaces: [0, 10, 15, 20, 30, 35, 50],
};

export default baseTheme;
