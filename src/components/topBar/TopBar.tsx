import * as React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Link } from 'react-router-dom';

const style = require('./TopBar.scss');

interface Props {
    title: string;
}

const TopBar = (props: Props) => (
    <AppBar position="fixed">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link to="" className={style.logo}> {props.title} </Link>
          </Typography>
        </Toolbar>
    </AppBar>
);

export default TopBar;