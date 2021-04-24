import React from 'react';
import { Profile } from './profile';
import { BusinessTheme } from '@enlear/react-material-themes.themes.business-theme';

export const BasicProfile = () => (
  <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
);

export const BusinessProfile = () => (
    <BusinessTheme> 
      <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
    </BusinessTheme>
);