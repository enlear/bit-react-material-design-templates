import React from 'react';
import { render } from '@testing-library/react';
import { BasicProfile } from './profile.composition';

describe('profile', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicProfile />);
    const rendered = getByText('hello from Profile');
    expect(rendered).toBeTruthy();
  });
});
