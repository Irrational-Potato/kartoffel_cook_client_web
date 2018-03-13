import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

interface Props {
    title: string;
}

const TopBar = (props: Props) => (
    <AppBar>
        <Toolbar>
            <Typography variant="title" color="inherit">
                {props.title}
          </Typography>
        </Toolbar>
    </AppBar>
);

export default TopBar;