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

  const titleItems = [
    { icon: <SchoolIcon />, text: "Academic Title", title: titles.academic_title },
    { icon: <TrendingUpIcon />, text: "Commercial Title", title: titles.commercial_title },
  ]

  return (
    <Container sx={{alignContent: 'center', alignItems: 'center', justifyContent: 'center',
     display: 'flex', flexDirection: 'column',width:'75%', padding:'2em', margin:'2em auto'}}>

        <img src={logo} alt="Project Logo" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} />

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
        <Grid item xs={12} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' , margin: '1em 0'}}>
        {titleItems.map((title, index) => (

         <ListItem key={index} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '30%' }}>
          <ListItemIcon>
            {title.icon}
          </ListItemIcon>
          <ListItemText primary={title.title} secondary={title.text} />
        </ListItem>

        ))}
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