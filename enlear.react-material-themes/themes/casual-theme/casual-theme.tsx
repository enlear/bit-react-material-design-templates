import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

export interface CasualThemeProps extends React.HTMLAttributes<React.ReactNode> {
};

export function CasualTheme({ children }: CasualThemeProps) {
  const casualTheme = createMuiTheme({
    typography: {
      button: {
        background: '#46AD8D',
        color: '#ffffff'
      },
      fontFamily: [
        'Cursive',
        'New Tegomin'
      ].join(',')
    },
    palette: {
      primary: {
        main: "#46AD8D",
        contrastText: "#fff"
      },
      background: {
        default: "#394764"
      }
    },
    shape: {
      borderRadius: 15,
    }
  });

  return (
    <ThemeProvider theme={casualTheme}>
      {children}
    </ThemeProvider>
  );
};
