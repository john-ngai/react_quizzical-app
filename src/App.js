// Packages
import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
// Components
import Start from './components/Start';
import Quiz from './components/Quiz';
// Stylesheet
import './style.css';

export default function App() {
  // States
  const [page, setPage] = useState('START');
  const [questions, setQuestions] = useState([]);

  // Get 5 questions from the Open Trivia DB API.
  const getQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        const questions = data.results.map(element => {
          const selected = '';
          let { question, correct_answer, incorrect_answers } = element;
          // Convert HTML entities into characters.
          question = decode(question);
          correct_answer = decode(correct_answer);
          incorrect_answers = incorrect_answers.map(answer => decode(answer));
          // Add & shuffle all answers to the choices array.
          const choices = incorrect_answers;
          choices.push(correct_answer);
          choices.sort(() => Math.random() - 0.5);
          return { question, correct_answer, choices, selected };
        });
        return setQuestions(questions);
      });
  }

  useEffect(() => { getQuestions() }, []);

  const updateSelected = (question, choice) => {
    setQuestions(prev => prev.map(element => {
      if (element.question === question) {
        return ({ ...element, selected: choice });
      } else {
        return element;
      }
    }));
  }

  console.log('page =', page); // Remove test code.

  return (
    <main>
      <button className='toggle-start'
        onClick={() => setPage('START')}
      >Toggle Start</button>
      <button className='toggle-answers'
        onClick={() => setPage('ANSWERS')}
      >Toggle Answers</button>

      {page === 'START' && <Start setPage={() => setPage('QUIZ')} />}

      {
        page === 'QUIZ' &&
        <Quiz
          questions={questions}
          updateSelected={updateSelected}
          page={page}
        />
      }

      {
        page === 'ANSWERS' &&
        <Quiz
          questions={questions}
          page={page}
        />
      }
    </main>
  );
}