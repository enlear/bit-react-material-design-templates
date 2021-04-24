import React from 'react';
import { render } from '@testing-library/react';
import { BasicBusinessTheme } from './business-theme.composition';

describe('business-theme', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBusinessTheme />);
    const rendered = getByText('hello from BusinessTheme');
    expect(rendered).toBeTruthy();
  });
});
