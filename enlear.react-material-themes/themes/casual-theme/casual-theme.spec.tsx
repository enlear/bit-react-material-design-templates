import { render } from '@testing-library/react';
import React from 'react';
import { BasicCasualTheme } from './casual-theme.composition';

describe('casual-theme', () => {
  it('should render with the correct text', () => {
    const { getByRole } = render(<BasicCasualTheme />);
    const rendered = getByRole('button');
    expect(rendered).toBeTruthy();
  });
});
