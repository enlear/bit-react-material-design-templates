import { render } from '@testing-library/react';
import React from 'react';
import { BasicCasualTheme } from './casual-theme.composition';

describe('casual-theme', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicCasualTheme />);
    const rendered = getByText('Employees');
    expect(rendered).toBeTruthy();
  });
});
