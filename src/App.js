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
    return fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
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

  // Change the value of the 'selected' property to the choice that was clicked.
  const updateSelected = (question, choice) => {
    setQuestions(prev => prev.map(element => {
      if (element.question === question) {
        return ({ ...element, selected: choice });
      } else {
        return element;
      }
    }));
  }

  // Set the page to 'QUIZ' after retrieving the new questions.
  const newGame = () => {
    return getQuestions()
      .then(() => setPage('QUIZ'));
  }

  return (
    <main>
      {page === 'START' && <Start setPage={() => setPage('QUIZ')} />}
      {
        page === 'QUIZ' &&
        <Quiz
          questions={questions}
          updateSelected={updateSelected}
          page={page}
          setPage={() => setPage('ANSWERS')}
        />
      }
      {
        page === 'ANSWERS' &&
        <Quiz
          questions={questions}
          page={page}
          setPage={() => newGame()}
        />
      }
    </main>
  );
}