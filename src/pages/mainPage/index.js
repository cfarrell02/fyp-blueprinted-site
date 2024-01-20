import {React} from 'react';
import { Container, Divider, Grid, Typography, Card } from '@mui/material';
import LinkCard from '../../components/linkCard';
import ImageCard from '../../components/imageCard';
import data from "../../data/main.json";

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


  return (
    <Card sx={{alignContent: 'center', alignItems: 'center', justifyContent: 'center',
     display: 'flex', flexDirection: 'column',width:'70%', padding:'2em', margin:'2em auto'}}>
        <img src={logo} alt="Project Image" style={{width: '70%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em'}} />
        <Typography variant="p" sx={{margin: '1em 0 0 0'}}>{`This is a project by ${name} (${student_number}) for ${course}`}</Typography>
        <Typography variant="h4" sx={{margin: '1em 0 0 0'}}>Project Details</Typography>
        <Divider sx={{width: '100%', margin: '1em 0'}} />
        <Grid container spacing={2}>

        <Grid item xs={12} sx={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', margin: '1em 0'}}>
            <Typography variant="h6">Project Title: '{titles.academic_title}'</Typography>
            <Typography variant="h6">Commercial Title: '{titles.commercial_title}'</Typography>
        </Grid>



          <Grid item xs={8} sx={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Typography variant="p" sx={{margin: 'auto', width: '80%'}}
            >{project_description}</Typography>
        </Grid>
        <Grid item xs={4}>
          <ImageCard imageURL={image} altText={name} caption={name} />

        </Grid>
        </Grid>
        <Typography variant="h4" sx={{margin: '1em 0 0 0'}}>Links</Typography>
        <Divider sx={{width: '100%', margin: '1em 0'}} />

        <Grid container spacing={2}>
          {links.map((link, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <LinkCard description={link.description} link={link.url} title={link.name} />
            </Grid>
          ))}
        </Grid>
    </Card>
  );
}

export default MainPage;