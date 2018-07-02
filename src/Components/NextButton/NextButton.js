import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material UI
import {withStyles} from '@material-ui/core';
import {styles} from './NextButton.styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon/Icon';
import Typography from '@material-ui/core/Typography/Typography';

class NextButton extends Component{

    render(){
        const {classes} = this.props;
        return(
            <Link className={classes.link} to={`/${this.props.next}`}>
                <Typography variant="button" className={classes.text}>Next</Typography>
                <IconButton className={classes.button} onClick={this.props.submit}>
                    <Icon className={classes.icon}>forward</Icon>
                </IconButton>
            </Link>
        );
    }
}

export default withStyles(styles)(NextButton);