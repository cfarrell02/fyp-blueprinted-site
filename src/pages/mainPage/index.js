import {React} from 'react';
import { Container, Divider, Typography } from '@mui/material';
import LinkCard from '../../components/linkCard';

const MainPage = () => {
  return (
    <Container sx={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', padding:'2em 0'}}>
      <Typography variant="h1">Blueprinted Game</Typography>
        <Typography variant="p">(Site under construction)</Typography>
        <Divider sx={{width: '100%', margin: '1em 0'}} />
        <LinkCard title="Blueprinted Game" description="Repository for the game" link="https://github.com/cfarrell02/FYP-Blueprinted" />
    </Container>
  );
}

export default MainPage;