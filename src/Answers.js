import React from 'react';

function Answers({answers, adjustScore}) {
    const handleClick = (e) => {
        const correctAns = e.target.value;
        adjustScore(correctAns);
    }

    return (
        <div>
            {answers.map(answer => (
                <button
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

export default Answers;