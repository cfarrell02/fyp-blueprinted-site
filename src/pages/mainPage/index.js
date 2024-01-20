import {React} from 'react';
import { Container, Divider, Grid, Typography, Card, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import LinkCard from '../../components/linkCard';
import ImageCard from '../../components/imageCard';
import data from "../../data/main.json";
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useTheme } from '@emotion/react';

const MainPage = () => {
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


  const image = require("../../images/" + image_file)
  const logo = require("../../images/" + logo_file)

  const icons = [
    { icon: <GitHubIcon />, text: "GitHub" },
    { icon: <DescriptionIcon />, text: "Description" },
    { icon: <OndemandVideoIcon />, text: "OndemandVideo" },
  ]

  return (
    <Container sx={{alignContent: 'center', alignItems: 'center', justifyContent: 'center',
     display: 'flex', flexDirection: 'column',width:'70%', padding:'2em', margin:'2em auto'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '1em',
         borderColor: '#418AB3', borderWidth: 'px', borderStyle: 'solid' }}>
        <img src={logo} alt="Project Image" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em'}} />
        </Box>
        <Typography variant="p" sx={{margin: '1em 0 0 0'}}>{`This is a project by ${name} (${student_number}) for ${course}`}</Typography>
        <Typography variant="h4" sx={{margin: '1em 0 0 0'}}>Project Details</Typography>
        <Divider sx={{width: '100%', margin: '1em 0'}} />
        <Grid container spacing={2}>

          <Grid item xs={8} sx={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h5" sx={{margin: '1em auto'}}> Project Description</Typography>
            <Typography variant="p" sx={{margin: '0 auto', width: '80%'}}
            >{project_description}</Typography>
        </Grid>
        <Grid item xs={4}>
          <ImageCard imageURL={image} altText={name} caption={name} />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
  <ListItem >
    <ListItemIcon>
      <SchoolIcon />
    </ListItemIcon>
    <ListItemText primary={titles.academic_title} secondary={"Academic Title"} />
  </ListItem>
  <ListItem > 
    <ListItemIcon>
      <TrendingUpIcon />
    </ListItemIcon>
    <ListItemText primary={titles.commercial_title} secondary={"Commercial Title"} />
  </ListItem>
</Grid>


        </Grid>


        <Typography variant="h4" sx={{margin: '1em 0 0 0'}}>Links</Typography>
        <Divider sx={{width: '100%', margin: '1em 0'}} />

        <Grid container spacing={2}>
          {links.map((link, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <LinkCard description={link.description} link={link.url} title={link.name} icon={icons[index]} />
            </Grid>
          ))}
        </Grid>
    </Container>
  );
}

export default MainPage;