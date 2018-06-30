import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const mapReduxStateToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Question extends Component{
    render(){
        return(
            <div>
                <h2>Question</h2>
            </div>
        );
    }
}

export default compose(
    connect(mapReduxStateToProps)
)(Question);