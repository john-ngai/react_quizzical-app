import { nanoid } from 'nanoid';
import Question from './Question';
import './index.css';

// APP > QUIZ
export default function Quiz(props) {
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
        updateSelected={props.updateSelected}
      />
    );
  });

  return (
    <section className='quiz-page'>
      {questionElements}
      <button className='button--check'>Check Answers</button>
    </section>
  );
}