import React from 'react';
import { Link } from 'react-router-dom';

const NextButton = () => {
        return(
            <button><Link path={`/${this.props.next}`}/></button>
        );
    }


export default NextButton;