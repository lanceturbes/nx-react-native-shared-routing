import { RootNavigator } from '@./feat-navigation';
import { ThemeProvider } from '@./feat-theme';
import React from 'react';

export function AppRoot() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

export default AppRoot;
