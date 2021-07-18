import React from 'react';
import Answers from './Answers';

function Question({question, quizStatus, questions, adjustScore}) {

    const quest = questions[question];

    return (
        <div className='container question-container'>
            <div class="question-number"><h1>Question {quest.number}</h1></div>
            <p class="question-text">{quest.question}</p>
            <Answers answers={quest.answers} adjustScore={adjustScore} />
        </div>
    );
}

export default Question;