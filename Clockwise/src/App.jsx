import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing';
import { ThemeProvider, CssBaseline } from '@mui/material';
import globalTheme from './styles/themes/globalTheme'; 

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
    
      <CssBaseline />
      
      <Navbar />
      <Landing />
      <Home />
    </ThemeProvider>
  );
}

export default App;