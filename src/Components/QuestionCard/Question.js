import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import PropTypes from 'prop-types';
import axios from 'axios';

import StatusBar from '../StatusBar/StatusBar';

// Material UI
import {withStyles} from '@material-ui/core';
import {styles} from '../../Card.styles';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Typography from '@material-ui/core/Typography/Typography';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';

const mapReduxStateToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Question extends Component{
    constructor(){
        super();

        this.state = {input: ''}

    }

    handleInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    submitInput = () => {
        const type = this.props.type;
        const action = {type: type, payload: this.state.input}
        this.props.dispatch(action);
    }

    submitFeedback = () =>{
        axios.post('/feedback', this.props.feedbackReducer).then().catch();
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <StatusBar step={this.props.step}/>
                <Card className={classes.card}>
                    <CardContent className={classes.questionBox}>
                        <Typography variant="title">{this.props.question}</Typography>
                        <InputLabel className={classes.inputLabel}>1 - poorly : 5 - great</InputLabel>
                        <Input className={classes.question} type="number" value={this.state.input} onChange={this.handleInputChange} placeholder="1 to 5"/>
                    </CardContent>
                    <CardActions className={classes.buttonBox}>
                        <NextButton className={classes.button} submit={this.submitInput} next={this.props.nextPage}/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

Question.propTypes = {
    nextPage: PropTypes.string,
    question: PropTypes.string,
    actionType: PropTypes.string
};  

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles)
)(Question);