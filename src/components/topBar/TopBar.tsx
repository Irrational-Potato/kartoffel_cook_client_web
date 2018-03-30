import * as React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

interface Props {
    title: string;
}

const TopBar = (props: Props) => (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
    </AppBar>
);

export default TopBar;