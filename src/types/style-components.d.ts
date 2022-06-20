/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from '../styles/theme';
import colors from '../styles/colors';

type Theme = typeof theme;
type ColorsDefault = typeof colors['default'];
type ColorsDark = typeof colors['dark'];

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: ColorsDefault | ColorsDark;
  }
}
