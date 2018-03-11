import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const TopBar = () => (
    <AppBar>
        <Toolbar>
            <Typography variant="title" color="inherit">
                Kartoffel Cook
          </Typography>
        </Toolbar>
    </AppBar>
);

export default TopBar;