import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

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
        const action = {type: {type}, payload: this.state.input}
        this.props.dispatch(action);
    }

    render(){
        return(
            <div>
                <h2>Question</h2>
                <h4>{this.props.question}</h4>
                <input type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="Answer"/>
                {JSON.stringify(this.state)}
                {JSON.stringify(this.props)}
            </div>
        );
    }
}

export default compose(
    connect(mapReduxStateToProps)
)(Question);