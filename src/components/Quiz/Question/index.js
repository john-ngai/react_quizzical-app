// Stylesheets
import './index.css';

export default function Question(props) {
  const { page, updateSelected, question, choices, correct_answer, selected } = props;
  // Conditional classes for page = 'QUIZ'.
  const quizbuttonClass = (selected, choice) => {
    return selected === choice ? 'button--option selected' : 'button--option';
  }
  // Conditional classes for page = 'ANSWERS'.
  const answersButtonClass = (selected, choice, correct_answer) => {
    if (selected === correct_answer && selected === choice) {
      return 'button--result correct';
    } else if (selected !== correct_answer && selected === choice) {
      return 'button--result incorrect';
    } else if (choice === correct_answer) {
      return 'button--result correct';
    } else {
      return 'button--result';
    }
  }

  return (
    <div>
      <h3 className='question-title'>{question}</h3>
      <button
        className={page === 'QUIZ' ?
          quizbuttonClass(selected, choices[0]) :
          page === 'ANSWERS' ?
            answersButtonClass(selected, choices[0], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return page === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[0]}</button>
      <button
        className={page === 'QUIZ' ?
          quizbuttonClass(selected, choices[1]) :
          page === 'ANSWERS' ?
            answersButtonClass(selected, choices[1], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return page === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[1]}</button>
      <button
        className={page === 'QUIZ' ?
          quizbuttonClass(selected, choices[2]) :
          page === 'ANSWERS' ?
            answersButtonClass(selected, choices[2], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return page === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[2]}</button>
      <button
        className={page === 'QUIZ' ?
          quizbuttonClass(selected, choices[3]) :
          page === 'ANSWERS' ?
            answersButtonClass(selected, choices[3], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return page === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[3]}</button>
      <div className="line" />
    </div>
  );
}