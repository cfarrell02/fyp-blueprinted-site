import {React} from 'react';
import { Container, Divider, Grid, Typography, Paper, Card } from '@mui/material';

const ImageCard = ({imageURL, caption, altText}) => {

    return (
        <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em', 
        borderRadius: '1em', borderColor: '#418AB3', borderWidth: 'px', borderStyle: 'solid' }}>
            <img src={imageURL} alt={altText} style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent:
             'center', alignItems: 'center', borderRadius: '1em'
            }} />
            {caption && <Typography variant="p">{caption}</Typography>}
        </Card>
    );

}

export default ImageCard;