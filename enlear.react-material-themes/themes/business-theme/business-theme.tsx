import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import blue from '@material-ui/core/colors/blue';

export interface BusinessThemeProps extends React.HTMLAttributes<HTMLDivElement> {
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
