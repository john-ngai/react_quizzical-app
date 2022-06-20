import './index.css';

export default function Question(props) {
  const { question, choices } = props

  return (
    <div>
      <h3 className='question-title'>{question}</h3>
      <button className="button--option"
        onClick={event => console.log(event.target.innerText)}
      >{choices[0]}</button>
      <button className="button--option"
        onClick={event => console.log(event.target.innerText)}
      >{choices[1]}</button>
      <button className="button--option"
        onClick={event => console.log(event.target.innerText)}
      >{choices[2]}</button>
      <button className="button--option"
        onClick={event => console.log(event.target.innerText)}
      >{choices[3]}</button>
      <div className="line" />
    </div>
  );
}