import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Comments = () => {
    const nextPage = 'thankyou';
    const question = 'Any comments you want to leave?';
    const type = 'C_PAGE';
    return(
        <div>
            <Question type={type} question={question} nextPage={nextPage}/>     
        </div>
    );
}

export default Comments;