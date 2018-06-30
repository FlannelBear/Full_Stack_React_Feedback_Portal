import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NextButton extends Component{

    render(){
        return(
            <button><Link to={`/${this.props.next}`}>Next</Link></button>
        );
    }
}

export default NextButton;