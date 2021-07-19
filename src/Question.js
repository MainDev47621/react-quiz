import React, { useState, useEffect } from 'react';
import { Answers } from './Answers';

export function Question({question, questions, adjustScore}) {

    const quest = questions[question];
    
    return (
        <div className="container question-container">
            <div className="question-number"><h1>Question {quest.number}</h1></div>
            <p className="question-text">{quest.question}</p>
            <Answers answers={quest.answers} adjustScore={adjustScore} />
        </div>
    );
}