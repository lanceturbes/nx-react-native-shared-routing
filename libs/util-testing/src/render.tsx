import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { StyledProvider } from '@dank-style/react';
import { config } from '@./feat-theme';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <StyledProvider config={config}>{children}</StyledProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
