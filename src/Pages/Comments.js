import React from 'react';
import Comment from '../Components/Comment/Comment';
const Comments = () => {
    const nextPage = 'thankyou';
    const question = 'Any comments you want to leave?';
    const type = 'C_PAGE';
    const step = 3;
    return(
        <div>
            <Comment type={type} question={question} nextPage={nextPage} step={step}/>     
        </div>
    );
}

export default Comments;