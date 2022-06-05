import { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  // States
  const [page, setPage] = useState('START');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Get 5 questions from the Open Trivia DB API.
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results));
  }, []);

  return (
    <main>
      {page === 'START' &&
        <div className='start-page'>
          <h1 className='title'>Quizzical</h1>
          <p className='description'>Some description if needed</p>
          <button className='button--start'
            onClick={() => setPage('QUIZ')}
          >Start Quiz</button>
        </div>}

      {page === 'QUIZ' &&
        <button onClick={() => setPage('START')}>Go Back</button>
      }
    </main>
  );
}