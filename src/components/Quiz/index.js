import { nanoid } from 'nanoid';
import Question from './Question';
import './index.css';

// APP > QUIZ
export default function Quiz(props) {
  const { page, setPage, updateSelected } = props;

  const questionElements = props.questions.map(element => {
    const { question, choices, correct_answer, selected } = element;
    // Return each element as a Question component.
    return (
      <Question
        key={nanoid()}
        question={question}
        choices={choices}
        correct_answer={correct_answer}
        selected={selected}
        updateSelected={updateSelected}
        page={page}
      />
    );
  });

  return (
    <section className='quiz-page'>
      {questionElements}

      {
        page === 'QUIZ' &&
        <button className='button--check'
          onClick={setPage}
        >Check Answers</button>
      }

      {
        page === 'ANSWERS' &&
        <button className='button--check'
          onClick={setPage}
        >Play Again</button>
      }
    </section>
  );
}