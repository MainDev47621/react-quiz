import React from 'react';

function BeginQuiz({setQuizStatus, setQuestion}) {
    const handleClick = () => {
        setQuizStatus('inProgress');
        setQuestion(0);
    }

    return (
        <div className="container begin-end-container">
            <h1 className="heading-text">Welcome to the Quiz</h1>
            <button className="btn start-btn" onClick={handleClick}>Start Quiz</button>
        </div>
    );
}

export default BeginQuiz;