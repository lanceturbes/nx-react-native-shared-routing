import { StyledProvider } from '@dank-style/react';
import { createElement } from 'react';
import config from './dank-config';

export type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return createElement(StyledProvider, { config }, children);
}

export default ThemeProvider;
