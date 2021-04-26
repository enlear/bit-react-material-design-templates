import { render } from '@testing-library/react';
import React from 'react';
import { BusinessDashboard, CasualDashboard } from './dashboard.composition';

describe('dashboard', () => {
  it('business dashboard should contain 4 profiles in the grid', () => {
    const { getAllByText } = render(<BusinessDashboard />);
    const rendered = getAllByText('Hire');
    expect(rendered).toHaveLength(4);
  });

  it('casual dashboard should contain 4 profiles in the grid', () => {
    const { getAllByText } = render(<CasualDashboard />);
    const rendered = getAllByText('Hire');
    expect(rendered).toHaveLength(4);
  });
});
