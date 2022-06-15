import './index.css';

export default function Question() {
  return (
    <div>
      <h3 className='question-title'>Sample Question</h3>
      <button className="button--option">Option 1</button>
      <button className="button--option">Option 2</button>
      <button className="button--option">Option 3</button>
      <button className="button--option">Option 4</button>
      <div className="line" />
    </div>
  );
}