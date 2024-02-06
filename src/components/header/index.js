import {React} from 'react';
import { Container, Divider, Grid, Typography, Link, AppBar, createTheme, Box, ThemeProvider } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const theme = createTheme({
        palette: {
            primary: {
                // Light Blue
                main: '#418AB3',
                // White text
                contrastText: '#ffffff',
            },
            secondary: {
                // Emergency Yellow
                main: '#ffbf00',
                // Black text
                contrastText: '#000000', 
            },
        },
    });

    const underConstruction = false;


    return (
<ThemeProvider theme={theme}>
  <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bgcolor: 'primary.main', width: '100%', padding: '1em ' }}>
    <Link href="/fyp-blueprinted-site" sx={{ textDecoration: 'none', color: 'white' }}>
    <Typography variant="h4" sx={{ margin: '', color: 'white' }}>Blueprinted</Typography>
    </Link>
  </AppBar>
  {underConstruction && <>
  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bgcolor: 'secondary.main', width: '100%', padding: '0 0 1em 0' }}>
    <WarningAmberIcon sx={{ margin: '.5em 1em 0' }} />
    <Typography variant="h6" sx={{ margin: '1em 0 0 0' }}>Website is under construction</Typography>
    <WarningAmberIcon sx={{ margin: '.5em 1em 0' }} />
  </Box>
    </>}
</ThemeProvider>

    );

}

export default Header;