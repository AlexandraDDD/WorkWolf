import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
    palette: {
      primary: {
        main: '#b4a7b6', 
      },
      secondary: {
        main: '#dc004e', 
      },
     
    },
    components: {
        MuiSkeleton: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgb(86, 85, 87)', 
            },
          },
        },
      },
  });