import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Start from './components/Start';
import Quiz from './components/Quiz';
import './style.css';

export default function App() {
  // States
  const [page, setPage] = useState('START');
  const [questions, setQuestions] = useState([]);

  // Get 5 questions from the Open Trivia DB API.
  const getQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results));
  }

  useEffect(() => { getQuestions() }, []);

  return (
    <main>
      <button className='toggle-start'
        onClick={() => setPage('START')}
      >Toggle Start</button>

      {page === 'START' && <Start setPage={() => setPage('QUIZ')} />}

      {page === 'QUIZ' && <Quiz />}
    </main>
  );
}