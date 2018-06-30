import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Support = () => {
    const nextPage = 'comments';
    const question = 'How are you feeling today?';
    const type = 'support';
    return(
        <div>
            <Question type={type} question={question} nextPage={nextPage}/>            
        </div>
    );
}

export default Support;