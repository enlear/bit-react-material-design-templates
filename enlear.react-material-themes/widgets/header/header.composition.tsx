import { BusinessTheme } from '@enlear/react-material-themes.themes.business-theme';
import { CasualTheme } from '@enlear/react-material-themes.themes.casual-theme';
import React from 'react';
import { Header } from './header';

export const BusinessHeader = () => (
  <BusinessTheme>
    <Header title="Employees"/>
  </BusinessTheme>
);

export const CasualHeader = () => (
  <CasualTheme>
    <Header title="Employees"/>
  </CasualTheme>
);