import React from 'react';

function CompletedQuiz({score, numOfQuestions, restartQuiz}) {
    const handleClick = () => {
        restartQuiz();
    }

    return (
        <div className="container begin-end-container">
            <h1 class="heading-text">Completed Quiz</h1>
            <p>{score} / {numOfQuestions}</p>
            <button className="btn retake-btn" onClick={handleClick}>Restart Quiz</button>
        </div>
    );
}

export default CompletedQuiz;