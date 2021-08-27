import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import DvrIcon from '@material-ui/icons/Dvr';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EmailIcon from '@material-ui/icons/Email';
import DeckIcon from '@material-ui/icons/Deck';
import { Link } from 'react-router-dom';

const Lists = (props) => {
    return (
        <div>
            <List component='nav'>
                <Link to='/'>
                    <ListItem button onClick={() => {props.setcurrentSearch ("")}}>
                        <ListItemIcon>
                            <DvrIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                </Link>
                <Link to='/clima'>
                    <ListItem button>
                        <ListItemIcon>
                            <WbSunnyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Clima" />
                    </ListItem>
                </Link>
                <Link to='/horoscopo'>
                    <ListItem button>
                        <ListItemIcon>
                            <DeckIcon />
                        </ListItemIcon>
                        <ListItemText primary="Horóscopo" />
                    </ListItem>
                </Link>
                <Link to='/suscribite'>
                    <ListItem button>
                        <ListItemIcon>
                            <HowToRegIcon />
                        </ListItemIcon>
                        <ListItemText primary="Suscribite" />
                    </ListItem>
                </Link>
                <Link to='/contacto'>
                    <ListItem button>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacto" />
                    </ListItem>
                </Link>
                <Divider />
            </List>
        </div>
    )
}

export default Lists;
