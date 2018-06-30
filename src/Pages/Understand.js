import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Understand = () => {
    const nextPage = 'support';
    const question = 'How well are you understanding the content?';
    const type = 'understand';
    return(
        <div>
            <Question type={type} question={question} nextPage={nextPage}/>
        </div>
    );
}

export default Understand;