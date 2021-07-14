import React, { useState } from 'react';
import './App.css';
import BeginQuiz from './BeginQuiz';
import Question from './Question';
import CompletedQuiz from './CompletedQuiz';

function App() {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [quizStatus, setQuizStatus] = useState('notTaken');

  // switch (quizStatus) {
  //   case 'notTaken':
  //     return <BeginQuiz />;
  //   case 'inProgress':
  //     return <Question />;
  //   case 'completed':
  //     return <CompletedQuiz />;
  // }

  if (quizStatus === 'notTaken') {
    return <BeginQuiz />;
  } else if (quizStatus === 'inProgress') {
    return <Question />;
  } else {
    return <CompletedQuiz />;
  }
}

export default App;
