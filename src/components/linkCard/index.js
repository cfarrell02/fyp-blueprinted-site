import {React} from 'react';
import { Container, Typography, Card, CardMedia, CardActions, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

const LinkCard = ({title, description, link, icon}) => {
    return (
        <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}  >
        <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em',
         borderRadius: '1em', borderColor: '#418AB3', borderWidth: 'px', borderStyle: 'solid' }} className="linkCard">
            <Typography variant="h4"> <span style={{ verticalAlign: 'middle' }}>{title} </span>{icon.icon}</Typography>
                    
            <Divider sx={{width: '100%', margin: '1em 0'}} />
            <Typography variant="p">{description}</Typography>
        </Card>
        </Link>
    );
}

export default LinkCard;