import React, { useState } from 'react';
import { Container, Typography, Card, CardMedia, CardActions, Divider, Button, Accordion, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

const LinkCard = ({title, description, link, icon, previousLinks, previousLinksShown }) => {


    return (
        <>
        <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}  >
        <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em',
         borderRadius: '1em', borderColor: '#418AB3', borderWidth: 'px', borderStyle: 'solid' }} className="linkCard">
            <Typography variant="h4"> <span style={{ verticalAlign: 'middle' }}>{title} </span>{icon.icon}</Typography>
            <Divider sx={{width: '100%', margin: '1em 0'}} />
            <Typography variant="p">{description}</Typography>
        </Card>
        </Link>
        {previousLinks && previousLinks.length > 0 && (<>
        {previousLinksShown && (
                <List>
                    {previousLinks.map((link, index) => (
                        <Link to={link.url} style={{textDecoration: 'none', color: 'inherit'}}  >
                        <ListItem key={index} className='linkCard' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em', borderRadius: '1em', borderColor: '#418AB3', borderWidth: 'px', borderStyle: 'solid' }}>
                            <Typography variant="p">{link.name}</Typography>
                        </ListItem>
                        </Link>
                    ))}
                </List>
        )}
            </>
            )}
        </>
    );
}

export default LinkCard;