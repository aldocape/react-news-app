import React, { useContext } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import DvrIcon from '@material-ui/icons/Dvr';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EmailIcon from '@material-ui/icons/Email';
import DeckIcon from '@material-ui/icons/Deck';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';

const Lists = (props) => {

    const { userContext } = useContext(NewsContext);

    return (
        <div>
            <List component='nav'>
                <Link to='/'>
                    <ListItem button onClick={() => 
                    {   
                        props.setNewsList([]);
                        props.setisLoading(true);
                        props.setcurrentSearch ("Argentina");
                        props.setSelectedDateFrom(new Date()); 
                        props.setSelectedDateFrom(new Date()); 
                    }}>
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
                {userContext?'':<Link to='/suscribite'>
                    <ListItem button>
                        <ListItemIcon>
                            <HowToRegIcon />
                        </ListItemIcon>
                        <ListItemText primary="Suscribite" />
                    </ListItem>
                </Link>}
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
