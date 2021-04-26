import { BusinessTheme } from '@enlear/react-material-themes.themes.business-theme';
import { CasualTheme } from '@enlear/react-material-themes.themes.casual-theme';
import React from 'react';
import { Profile } from './profile';

export const BusinessProfile = () => (
  <BusinessTheme>
    <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
  </BusinessTheme>
);

export const CasualProfile = () => (
  <CasualTheme>
    <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
  </CasualTheme>
);
