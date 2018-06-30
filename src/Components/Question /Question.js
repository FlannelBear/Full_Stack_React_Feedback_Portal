import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropType from ''

const mapReduxStateToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Question extends Component{
    constructor(){
        super();

        this.state = {input: ''}
    }

    

    render(){
        return(
            <div>
                <h2>Question</h2>
                <h4>{this.props.question}</h4>
                <input type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="Answer"/>
            </div>
        );
    }
}

export default compose(
    connect(mapReduxStateToProps)
)(Question);