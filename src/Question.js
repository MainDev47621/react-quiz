import React from 'react';
import Answers from './Answers';

function Question({question, quizStatus, questions, adjustScore}) {

    const quest = questions[question];

    return (
        <div>
            <h1>Question {quest.question}</h1>
            <Answers answers={quest.answers} adjustScore={adjustScore} />
        </div>
    );
}

export default Question;