import {React} from 'react';
import { Container, Typography, Card, CardMedia, CardActions, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

const LinkCard = ({title, description, link, image}) => {
    return (
        <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}  >
        <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em'}} className="linkCard">
            {image && <CardMedia sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em'}} image={image} title={title} />}
            <Typography variant="h4">{title}</Typography>
            <Divider sx={{width: '100%', margin: '1em 0'}} />
            <Typography variant="p">{description}</Typography>
        </Card>
        </Link>
    );
}

export default LinkCard;