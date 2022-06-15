import Question from './Question';
import './index.css';

export default function Quiz() {
  return (
    <section className='quiz-page'>
      <Question />
      <button className='button--check'>Check Answers</button>
    </section>
  );
}