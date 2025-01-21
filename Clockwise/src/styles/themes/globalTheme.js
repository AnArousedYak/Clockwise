import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
    background: {
      default: '#2C2C2C',
      paper: '#3A3A3A',
    },
    text: {
      primary: '#FFD700',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#FFD700',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#FFD700',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: 'gold',
          '&:hover': {
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
          },
        },
      },
    },
  },
  spacing: 8,
});

export default globalTheme;
