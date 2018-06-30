import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Feeling = () => {
    return(
        <div>
            <Question type='feeling' question='How are you feeling today?' nextPage='understand'/>
        </div>
    );
}

export default Feeling;