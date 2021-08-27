import React from 'react';
import { makeStyles, Drawer, Divider, Hidden } from '@material-ui/core';
import Lists from './Lists';
import Banners from '../page/Banners';
import Logo from '../page/Logo';

const drawerWidth = 315;
const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar:theme.mixins.toolbar
}))

const DrawerComp = (props) => {
    const classes = styles()
    
    return (
        <Drawer className={classes.drawer}
            classes={{paper:classes.drawerPaper}}    
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
                
            <div className={classes.toolbar}><Logo /></div>
            <Divider />
            <Lists setcurrentSearch={props.setcurrentSearch} />
            <Hidden xsDown>
            <Banners />
            </Hidden>
        </Drawer>
    )
}

export default DrawerComp
