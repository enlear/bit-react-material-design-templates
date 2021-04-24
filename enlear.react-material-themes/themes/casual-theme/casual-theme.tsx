import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export interface CasualThemeProps extends React.HTMLAttributes<HTMLDivElement> {
};

export function CasualTheme({ children }: CasualThemeProps) {
 const casualTheme = createMuiTheme({
  
    typography: {
    button: {
      fontSize: '1rem',
        background: 'linear-gradient(45deg, #6C5CE7 30%, #FF8E53 90%)',
        borderRadius: 10
    },
  },
});

  return (
      <ThemeProvider theme={casualTheme}>
        {children}
      </ThemeProvider>
  );
}
