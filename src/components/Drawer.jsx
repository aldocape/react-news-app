import React from 'react';
import { makeStyles, Drawer, Divider, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Lists from './Lists';
import Logo from '../page/Logo';

const drawerWidth = 300;
const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar:theme.mixins.toolbar,
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
}))

const DrawerComp = (props) => {
    const classes = styles();
    const theme = useTheme();
    
    return (
        <Drawer className={classes.drawer}
            classes={{paper:classes.drawerPaper}}
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >   
            <div className={classes.drawerHeader}>
            <div className={classes.toolbar}><Logo /></div>
                <IconButton onClick={props.handleDrawerClose} >
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            
            <Divider />
            <Lists setcurrentSearch={props.setcurrentSearch} setisLoading={props.setisLoading}
            setNewsList={props.setNewsList} setSelectedDateFrom={props.setSelectedDateFrom} setSelectedDateTo={props.setSelectedDateTo} />
        </Drawer>
    )
}

export default DrawerComp;