import {React} from 'react';
import { Container, Divider, Grid, Typography, Card, AppBar, createTheme, ThemeProvider } from '@mui/material';

const Footer = () => {



    const message = "This project was created in react.js by Cian Farrell, as part of the FYP project for BSc in Computer Science at the South East Technological University (SETU).";
    const lightGrey = "#e0e0e0";
    const link = {
        text: "Code Available Here on GitHub",
        url: "https://github.com/cfarrell02/fyp-blueprinted-site"
    }

    return (
        
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em' }}>
            <Divider sx={{width: '100%', margin: '1em 0', backgroundColor: lightGrey}} />
            <Typography variant="p">{message}</Typography>
            <Typography variant="p" sx={{margin:'1em 0'}}><a href={link.url} style={{ color: 'inherit'}}>{link.text}</a></Typography>
        </Container>
    );

}

export default Footer;