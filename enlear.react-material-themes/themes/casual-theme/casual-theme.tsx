import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'

export interface CasualThemeProps extends React.HTMLAttributes<HTMLDivElement> {
};

export function CasualTheme({ children }: CasualThemeProps) {
 const casualTheme = createMuiTheme({ overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: 'white', fontFamily: 'Bangers, Arial'
      },
    },
  },
     shape: {
      borderRadius: 15,
    }, 
    typography: {
     
    button: {
        background: red[400]
    },
  },
});

  return (
      <ThemeProvider theme={casualTheme}>
        {children}
      </ThemeProvider>
  );
}
