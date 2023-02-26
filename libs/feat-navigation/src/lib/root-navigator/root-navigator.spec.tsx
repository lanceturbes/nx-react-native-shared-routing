import React from 'react';
import { render } from '@testing-library/react-native';

import RootNavigator from './root-navigator';

describe('RootNavigator', () => {
  it('should render successfully', () => {
    const { container } = render(<RootNavigator />);
    expect(container).toBeTruthy();
  });
});
