import React from 'react';
import { render } from '@testing-library/react';
import { BusinessProfile, CasualProfile } from './profile.composition';

describe('profile', () => {
  it('business profile should render with the correct text', () => {
    const { getByText } = render(<BusinessProfile />);
    const rendered = getByText('Alyssa Park');
    expect(rendered).toBeTruthy();
  });

  it('casual profile should render with the correct text', () => {
    const { getByText } = render(<CasualProfile />);
    const rendered = getByText('Alyssa Park');
    expect(rendered).toBeTruthy();
  });
});
