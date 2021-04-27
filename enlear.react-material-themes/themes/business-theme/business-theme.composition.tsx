import { Header } from '@enlear/react-material-themes.widgets.header';
import { Profile } from '@enlear/react-material-themes.widgets.profile';
import { Grid } from '@material-ui/core';
import React from 'react';
import { BusinessTheme } from './business-theme';

export const BusinessThemeHeader = () => (
  <BusinessTheme>
    <Header title="Employees" />
  </BusinessTheme>
);

export const BusinessThemeProfile = () => (
  <BusinessTheme>
    <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
  </BusinessTheme>
);

export const BasicBusinessTheme = () => (
  <BusinessTheme>
    <Grid container direction="column">
      <Grid item>
        <Header title="Employees" />
      </Grid>
      <Grid item>
        <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
      </Grid>
    </Grid>
  </BusinessTheme>
);
