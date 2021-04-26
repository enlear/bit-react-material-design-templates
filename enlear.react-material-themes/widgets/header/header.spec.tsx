import { render } from '@testing-library/react';
import React from 'react';
import { BusinessHeader, CasualHeader } from './header.composition';

describe('header', () => {
  it('business header should render with the correct text', () => {
    const { getByText } = render(<BusinessHeader />);
    const rendered = getByText('Employees');
    expect(rendered).toBeTruthy();
  });

  it('casual header should render with the correct text', () => {
    const { getByText } = render(<CasualHeader />);
    const rendered = getByText('Employees');
    expect(rendered).toBeTruthy();
  });
});
