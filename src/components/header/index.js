import {React} from 'react';
import { Container, Divider, Grid, Typography, Card, AppBar, createTheme, ThemeProvider } from '@mui/material';

const Header = () => {

    const theme = createTheme({
        palette: {
            primary: {
                // Light Blue
                main: '#03a9f4',
                // White text
                contrastText: '#fff',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '1em' }}>
                <Typography variant="h4">Blueprinted</Typography>
            </AppBar>
        </ThemeProvider>
    );

}

export default Header;