import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Support = () => {
    const nextPage = 'comments';
    const question = 'How are you feeling today?';
    const type = 'S_PAGE';
    const step = 2;
    return(
        <div>
            <Question type={type} question={question} nextPage={nextPage} step={step}/>            
        </div>
    );
}

export default Support;