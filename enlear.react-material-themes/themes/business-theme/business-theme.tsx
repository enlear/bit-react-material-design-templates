import blue from '@material-ui/core/colors/blue';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

export interface BusinessThemeProps extends React.HTMLAttributes<React.ReactNode> {
};

export function BusinessTheme({ children }: BusinessThemeProps) {
  const businessTheme = createMuiTheme({
    typography: {
      button: {
        background: blue[400]
      }
    },
  });

  return (
    <ThemeProvider theme={businessTheme}>
      {children}
    </ThemeProvider>
  );
}
