// Arquivo de definição de tipos ou seja so tem tipagens
import 'styled-components'
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styles-components' {
  export interface defaultTheme extends ThemeType {}
}