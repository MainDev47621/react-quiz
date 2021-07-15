import React from 'react';

function BeginQuiz({setQuizStatus}) {
    const handleClick = () => {
        setQuizStatus('inProgress');
    }

    return (
        <div>
            <h1>Begin Quiz</h1>
            <button onClick={handleClick}>Start Quiz</button>
        </div>
    );
}

export default BeginQuiz;