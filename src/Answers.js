import React from 'react';

export function Answers({answers, adjustScore}) {
    const handleClick = (e) => {
        const correctAns = e.target.value;
        adjustScore(correctAns);
    }

    return (
        <div className="answers">
            {answers.map(answer => (
                <button
                    className="btn ans-btn"
                    key={answer.choice}
                    id={answer.choice}
                    value={answer.correct}
                    onClick={handleClick}>
                        {answer.answer}
                </button>
            ))}
        </div>
    );
}