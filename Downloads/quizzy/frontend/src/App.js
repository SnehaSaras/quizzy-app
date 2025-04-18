
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div className="App">
      <h1>Quizzy - Online Quiz</h1>
      {questions.map(q => (
        <div key={q.id}>
          <h2>{q.question}</h2>
          <ul>
            {q.options.map(opt => <li key={opt}>{opt}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
