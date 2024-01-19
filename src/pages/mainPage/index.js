import {React} from 'react';
import { Container, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <Container sx={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', padding:'2em 0'}}>
      <Typography variant="h1">Blueprinted Game</Typography>
        <Typography variant="p">Site under construction</Typography>
    </Container>
  );
}

export default MainPage;