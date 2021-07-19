import React from 'react';

export function BeginQuiz({setQuizStatus}) {
    const handleClick = () => {
        setQuizStatus('inProgress');
    }

    return (
        <div className="container begin-end-container">
            <h1 className="heading-text">Welcome to the Quiz</h1>
            <button className="btn start-btn" onClick={handleClick}>Start Quiz</button>
        </div>
    );
}