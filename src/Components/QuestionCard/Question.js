import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import PropTypes from 'prop-types';

const mapReduxStateToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Question extends Component{
    constructor(){
        super();

        this.state = {input: ''}

        this.submitInput = this.submitInput.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    submitInput(){
        const type = this.props.type;
        const action = {type: type, payload: this.state.input}
        this.props.dispatch(action);
        this.setState({input: ''});
    }

    render(){
        return(
            <div>
                <h2>Question</h2>
                <h4>{this.props.question}</h4>
                <input type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="Answer"/>
                <NextButton submit={this.submitInput} next={this.props.nextPage}/>
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
    connect(mapReduxStateToProps)
)(Question);