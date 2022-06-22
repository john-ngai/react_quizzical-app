// Packages
import { nanoid } from 'nanoid';
// Components
import Question from './Question';
// Stylesheets
import './index.css';

export default function Quiz(props) {
  const { page, setPage, questions, updateSelected } = props;
  // Format each element as a Question component.
  const questionElements = questions.map(element => {
    const { question, choices, correct_answer, selected } = element;
    return (
      <Question
        key={nanoid()}
        page={page}
        updateSelected={updateSelected}
        question={question}
        choices={choices}
        correct_answer={correct_answer}
        selected={selected}
      />
    );
  });
  // Store the number of correct answers into a variable.
  let numOfCorrectAnswers = 0;
  questions.forEach(question => {
    if (question.selected === question.correct_answer) {
      numOfCorrectAnswers++;
    }
  })

  return (
    <section className='quiz-page'>
      {questionElements}
      {
        page === 'QUIZ'  &&
        <button className='button--check'
          onClick={setPage}
        >Check Answers</button>
      }
      {
        page === 'ANSWERS' &&
        <div className='results'>
          <p>You scored {numOfCorrectAnswers} of 5 correct answers</p>
          <button className='button--new-game'
            onClick={setPage}
          >Play Again</button>
        </div>
      }
    </section>
  );
}