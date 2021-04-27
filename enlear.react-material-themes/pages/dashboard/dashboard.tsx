import { Header } from '@enlear/react-material-themes.widgets.header';
import { Profile, ProfileProps } from '@enlear/react-material-themes.widgets.profile';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export interface DashboardProps extends React.HTMLAttributes<React.ReactNode> {
  /**
   * Profiles array
   */
  profiles: ProfileProps[]
};

export function Dashboard({ profiles }: DashboardProps) {

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Header title="Employees"></Header>
      </Grid>
      <Grid item container spacing={2}>
        {profiles.map((profile, key) => (
          <Grid item  key={key}>
            <Profile
              name={profile.name}
              title={profile.title}
              workSummary={profile.workSummary}
              onHire={() => { alert("The person is hired!"); }}></Profile>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
