import {React} from 'react';
import { Container, Divider, Grid, Typography, Link, AppBar, createTheme, Box, ThemeProvider } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const theme = createTheme({
        palette: {
            primary: {
                // Light Blue
                main: '#03a9f4',
                // White text
                contrastText: '#ffffff',
            },
        },
    });

    const underConstruction = true;


    return (
<ThemeProvider theme={theme}>
  <AppBar position="static" sx={{ padding: '1em 3em', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant="h4" sx={{ margin: '', color: 'white' }}>Blueprinted</Typography>
    <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Link href="/fyp-blueprinted-site" sx={{ margin: '0 1em 0 0', color: 'white' }}>Home</Link>
      <Link href="/fyp-blueprinted-site/poster" sx={{ margin: '0 1em 0 0', color: 'white' }}>Poster</Link>
    </div>
  </AppBar>
  {underConstruction && <>
  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bgcolor: 'yellow', width: '100%', padding: '0 0 1em 0' }}>
    <WarningAmberIcon sx={{ margin: '.5em 1em 0' }} />
    <Typography variant="h6" sx={{ margin: '1em 0 0 0' }}>Website is under construction</Typography>
    <WarningAmberIcon sx={{ margin: '.5em 1em 0' }} />
  </Box>
    </>}
</ThemeProvider>

    );

}

export default Header;