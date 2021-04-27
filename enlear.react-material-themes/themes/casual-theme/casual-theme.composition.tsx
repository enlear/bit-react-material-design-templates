import { Header } from '@enlear/react-material-themes.widgets.header';
import { Profile } from '@enlear/react-material-themes.widgets.profile';
import { Grid } from '@material-ui/core';
import React from 'react';
import { CasualTheme } from './casual-theme';

export const CasualThemeHeader = () => (
    <CasualTheme>
      <Header title="Employees" />
    </CasualTheme>
);
  
export const BusinessThemeProfile = () => (
<CasualTheme>
    <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
</CasualTheme>
);
  
export const BasicBusinessTheme = () => (
<CasualTheme>
    <Grid container direction="column">
    <Grid item>
        <Header title="Employees" />
    </Grid>
    <Grid item>
        <Profile name="Alyssa Park" title="Software Developer" workSummary="Engineer with experiance on developing, testing and implementing new software programs." />
    </Grid>
    </Grid>
</CasualTheme>
);