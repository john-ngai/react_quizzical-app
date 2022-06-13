import './index.css';

export default function Question(props) {
  const { question, options, solution } = props;
  
  return (
    <div>
      <h3 className='question-title'>{question}</h3>
      <button className="button--option">{options[0]}</button>
      <button className="button--option">{options[1]}</button>
      <button className="button--option">{options[2]}</button>
      <button className="button--option">{options[3]}</button>
      <div className="line" />
    </div>
  );
}