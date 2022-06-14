import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Start from './components/Start';
import Question from './components/Question';
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

  const questionElements = questions.map(element => {
    const { question, correct_answer, incorrect_answers } = element;
    const options = incorrect_answers;
    // Add the correct answer to the options arrays.
    options.push(correct_answer);
    // Randomize the options array.
    options.sort(() => Math.random() - 0.5);

    return (
      <Question
        key={nanoid()}
        question={question}
        options={options}
        solution={correct_answer}
      />
    );
  })











  return (
    <main>
      <button className='toggle-start'
        onClick={() => setPage('START')}
      >Toggle Start</button>

      {page === 'START' && <Start setPage={() => setPage('QUIZ')} />}

      {page === 'QUIZ' &&
        <section className='quiz-page'>
          {questionElements}
          <button>Check Answers</button>
        </section>
      }
    </main>
  );
}