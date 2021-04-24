import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export interface BusinessThemeProps extends React.HTMLAttributes<HTMLDivElement> {
};

export function BusinessTheme({ children }: BusinessThemeProps) {
 const businessTheme = createMuiTheme({
  
    typography: {
    button: {
      fontSize: '1rem',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 10
    },
  },
});

  return (
      <ThemeProvider theme={businessTheme}>
        {children}
      </ThemeProvider>
  );
}
