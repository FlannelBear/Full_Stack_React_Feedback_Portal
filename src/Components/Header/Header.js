import React, {Component} from 'react';

// Material UI
import { withStyles } from '@material-ui/core';
import { styles } from './Header.styles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Typography from '@material-ui/core/Typography/Typography';
import Icon from '@material-ui/core/Icon/Icon';

class Header extends Component {

    render(){
        const { classes } = this.props;
        return(
            <AppBar className={classes.appBar}>
                <Icon className={classes.icon}>star</Icon>
                <Typography variant='display2' className={classes.text}>Feedback!</Typography>
            </AppBar>
        );
    }

}

export default withStyles(styles)(Header);