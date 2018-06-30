import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

const mapReduxToProps = ({feedbackReducer}) => ({
    feedbackReducer
});

class Thankyou extends Component{
    componentDidMount(){
        this.submitFeedback();
        this.props.dispatch({type: 'CLEAR', payload: {}});
    }

    submitFeedback(){
        if(this.props.feedbackReducer){
            alert("You've already submitted feedback, click the button below to navigate back to add more feedback.");
        } else {
            axios.post('/feedback', this.props.feedbackReducer).then().catch();
        }
    }

    render(){
        return(
            <div>
                <button><Link to='/'>Submit more feedback</Link></button>
            </div>
        );
    }
}

export default connect(mapReduxToProps)(Thankyou);