import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Feeling = () => {
    const nextPage = 'understand';
    const question = 'How are you feeling today?';
    const type = 'F_PAGE';
    const step = 0;
    return(
        <div>
            <Question type={type} question={question} nextPage={nextPage} step={step}/>
        </div>
    );
}

export default Feeling;