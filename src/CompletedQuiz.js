import React from 'react';

function CompletedQuiz({score, numOfQuestions, restartQuiz}) {
    const handleClick = () => {
        restartQuiz();
    }

    return (
        <div className="container begin-end-container">
            <h1 className="heading-text">Completed Quiz</h1>
            <div className={'score-num'}><p>{score} / {numOfQuestions}</p></div>
            <button className="btn retake-btn" onClick={handleClick}>Restart Quiz</button>
        </div>
    );
}

export default CompletedQuiz;