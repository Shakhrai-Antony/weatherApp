import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      defaultWhite: string;
      defaultBlack: string;
      lightGrey: string;
      darkGrey: string;
      sienna: string;
      tomato: string;
      lightSlateGray: string;
      lavender: string;
      grayishBlue: string;
      customBackgroundColor: string;
      customBackgroundBlack: string;
    };
    sizes: {
      width: number;
      height: number;
      gap: number;
      borderRadius: number;
      fontSize: number;
    };
    spaces: Array<number>;
  }
}
