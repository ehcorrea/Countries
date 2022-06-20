/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from '../styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      elements: string;
      background: string;
      input: string;
      text: string;
    };
  }
}
