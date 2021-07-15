import React from 'react';

function CompletedQuiz({score, numOfQuestions, restartQuiz}) {
    const handleClick = () => {
        restartQuiz();
    }

    return (
        <div>
            <h1>Completed Quiz</h1>
            <p>{score} / {numOfQuestions}</p>
            <button onClick={handleClick}>Restart Quiz</button>
        </div>
    );
}

export default CompletedQuiz;