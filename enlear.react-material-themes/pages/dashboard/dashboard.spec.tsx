import React from 'react';
import { render } from '@testing-library/react';
import { BasicDashboard } from './dashboard.composition';

describe('dashboard', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicDashboard />);
    const rendered = getByText('hello from Dashboard');
    expect(rendered).toBeTruthy();
  });
});
