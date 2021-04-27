import { render } from '@testing-library/react';
import React from 'react';
import { BasicBusinessTheme } from './business-theme.composition';

describe('business-theme', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBusinessTheme />);
    const rendered = getByText('Employees');
    expect(rendered).toBeTruthy();
  });
});
