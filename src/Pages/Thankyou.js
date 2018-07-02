import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import axios from 'axios';

// Material UI
import {withStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';

const styles = {
    button: {
        backgroundColor: 'lightBlue',
        color: 'white',
        width: 400,
        marginLeft: 10,
        margin: 20
    },
    link: {
        textDecorationLine: 'none',
        margin: 20
    },
    container: {
        textAlign: 'center'
    }
}

const mapReduxToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Thankyou extends Component{
    componentDidMount(){
        this.submitFeedback();
        this.props.dispatch({type: 'CLEAR', payload: {}});
    }

    submitFeedback(){
        axios.post('/feedback', this.props.feedbackReducer).then().catch((error)=>{
            alert('Go back to the beginning!');
        }); 
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <Typography variant="display2">Thankyou for your feedback!</Typography>
                <Link className={classes.link} to='/'><Button className={classes.button}><Typography variant="title">Submit more feedback</Typography></Button></Link>
            </div>
        );
    }
}

export default compose(
    connect(mapReduxToProps),
    withStyles(styles)
)(Thankyou);