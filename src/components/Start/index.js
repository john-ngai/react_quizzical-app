// Stylesheets
import './index.css';

export default function Start(props) {
  return (
    <section className='start-page'>
      <h1 className='title'>Quizzical</h1>
      <p className='description'>Some description if needed</p>
      <button className='button--start'
        onClick={props.setVisualMode}
      >Start Quiz</button>
    </section>
  );
}