import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Feeling = () => {
    const nextPage = 'understand';
    const question = 'How are you feeling today?';
    const type = 'F_PAGE';
    return(
        <div>
            <Question type={type} question={question} nextPage={nextPage}/>
        </div>
    );
}

export default Feeling;