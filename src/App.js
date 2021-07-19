import React, { useState } from 'react';
import './App.css';
import BeginQuiz from './BeginQuiz';
import Question from './Question';
import CompletedQuiz from './CompletedQuiz';
import questions from './questions';

function App() {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [quizStatus, setQuizStatus] = useState('ready');

  const incrementQuestion = () => {
    if (question >= questions.length - 1) {
      setQuizStatus('completed');
    } else {
      setQuestion(question => question + 1);
    }
  }

  const adjustScore = (correct) => {
    console.log(correct);
    if (correct === 'true') {
      setScore(score => score + 1);
    }
    incrementQuestion();
  }

  const restartQuiz = () => {
    setScore(0);
    setQuestion(0);
    setQuizStatus('ready');
  }

  return (
    <div className="App">
      { quizStatus === 'ready' && <BeginQuiz setQuizStatus={setQuizStatus} setQuestion={setQuestion} /> }
      { quizStatus === 'inProgress' && <Question question={question} quizStatus={quizStatus} questions={questions} adjustScore={adjustScore} /> }
      { quizStatus === 'completed' && <CompletedQuiz score={score} numOfQuestions={questions.length} restartQuiz={restartQuiz} /> }
    </div>
  );
}

export default App;
