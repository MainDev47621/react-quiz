import React from 'react';

function BeginQuiz({setQuizStatus}) {
    const handleClick = () => {
        setQuizStatus('inProgress');
    }

    return (
        <div className="container begin-end-container">
            <h1 class="heading-text">Welcome to the Quiz</h1>
            <button className="btn start-btn" onClick={handleClick}>Start Quiz</button>
        </div>
    );
}

export default BeginQuiz;