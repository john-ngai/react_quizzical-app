import './index.css';

export default function Start(props) {
  const { setPage } = props.setPage;


  return (
    <section className='start-page'>
      <h1 className='title'>Quizzical</h1>
      <p className='description'>Some description if needed</p>
      <button className='button--start'
        /*onClick={() => setPage('QUIZ')}*/
      >Start Quiz</button>
    </section>
  );
}