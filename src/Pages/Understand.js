import React from 'react';
import Question from '../Components/QuestionCard/Question';

const Understand = () => {
    return(
        <div>
            <Question type='understand' question='How well are you understanding the content?' nextPage='support'/> 
        </div>
    );
}

export default Understand;