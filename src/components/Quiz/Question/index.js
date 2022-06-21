import './index.css';

export default function Question(props) {
  const { question, choices, correct_answer, selected, updateSelected } = props
  return (
    <div>
      <h3 className='question-title'>{question}</h3>
      <button
        className={selected === choices[0] ?
          'button--option selected' : 'button--option'
        }
        onClick={event => {
          const choice = event.target.innerText;
          return updateSelected(question, choice);
        }}
      >{choices[0]}</button>
      <button
        className={selected === choices[1] ?
          'button--option selected' : 'button--option'
        }
        onClick={event => {
          const choice = event.target.innerText;
          return updateSelected(question, choice);
        }}
      >{choices[1]}</button>
      <button
        className={selected === choices[2] ?
          'button--option selected' : 'button--option'
        }
        onClick={event => {
          const choice = event.target.innerText;
          return updateSelected(question, choice);
        }}
      >{choices[2]}</button>
      <button
        className={selected === choices[3] ?
          'button--option selected' : 'button--option'
        }
        onClick={event => {
          const choice = event.target.innerText;
          return updateSelected(question, choice);
        }}
      >{choices[3]}</button>
      <div className="line" />
    </div>
  );
}