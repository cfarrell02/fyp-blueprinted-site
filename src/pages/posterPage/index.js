import {React} from 'react';
import { Container, Divider, Grid, Typography, Link, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import placeholderImage from '../../images/placeholder.png';
import data from "../../data/main.json";
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useTheme } from '@emotion/react';

const PosterPage = () => {
  const {
    name,
    student_number,
    course,
    titles,
    project_description,
    image_file,
    logo_file,
    links
  } = data;


  return (
    <Container sx={{alignContent: 'center', alignItems: 'center', justifyContent: 'center',
     display: 'flex', flexDirection: 'column',width:'75%', padding:'2em', margin:'2em auto'}}>
        <Typography variant="h2" sx={{margin: '1em 0 0 0'}}>Project Poster</Typography>
        <Divider sx={{width: '100%', margin: '1em 0'}} />
        <Typography variant="p" sx={{margin: '2em 0'}}>This is the poster for 'Blueprinted' by {name} ({student_number}) for {course}</Typography>
        <Link href={placeholderImage} target="_blank" rel="noopener noreferrer">Poster</Link>
        <Divider sx={{width: '100%', margin: '3em 0'}} />
        <img src={placeholderImage} alt="Project Poster" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto'}} />

    </Container>
  );
}

export default PosterPage;