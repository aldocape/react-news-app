import React from 'react';
import { Typography, Hidden, withWidth, Button } from '@material-ui/core';

const HiddenComp = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                    xs
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(HiddenComp)
