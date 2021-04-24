import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Header } from '@enlear/react-material-themes.widgets.header';
import Grid from '@material-ui/core/Grid';

export type DashboardProps = {
 
};

export function Dashboard() {

  return (
     <Grid container direction="column">
          <Grid item>
            <Header></Header>
          </Grid>
          <Grid item container>
             
          </Grid>
      </Grid>
  );
}
