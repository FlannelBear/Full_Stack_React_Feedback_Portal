import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import PropTypes from 'prop-types';

import StatusBar from '../StatusBar/StatusBar';

// Material UI
import { withStyles } from '@material-ui/core';
import { styles } from '../../Card.styles';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Typography from '@material-ui/core/Typography/Typography';

const mapReduxStateToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Comment extends Component{
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

    render(){
        const { classes } = this.props;
        return(
            <div>
                <StatusBar step={this.props.step}/>
            <Card className={classes.card}>
                <CardContent className={classes.questionBox}>
                <Typography variant="title">{this.props.question}</Typography>
                <textarea className={classes.question} type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="Answer"/>
                </CardContent>
                <CardActions className={classes.buttonBox}>
                <NextButton submit={this.submitInput} next={this.props.nextPage}/>
                </CardActions>
            </Card>
            </div>
        );
    }
}

Comment.propTypes = {
    nextPage: PropTypes.string,
    question: PropTypes.string,
    actionType: PropTypes.string
};  

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles)
)(Comment);