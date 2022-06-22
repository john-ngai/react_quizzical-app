// Stylesheets
import './index.css';

export default function Question(props) {
  const { visualMode, updateSelected, question, choices, correct_answer, selected } = props;
  // Conditional classes for visualMode = 'QUIZ'.
  const quizbuttonClass = (selected, choice) => {
    return selected === choice ? 'button--option selected' : 'button--option';
  }
  // Conditional classes for visualMode = 'ANSWERS'.
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
        className={visualMode === 'QUIZ' ?
          quizbuttonClass(selected, choices[0]) :
          visualMode === 'ANSWERS' ?
            answersButtonClass(selected, choices[0], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return visualMode === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[0]}</button>
      <button
        className={visualMode === 'QUIZ' ?
          quizbuttonClass(selected, choices[1]) :
          visualMode === 'ANSWERS' ?
            answersButtonClass(selected, choices[1], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return visualMode === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[1]}</button>
      <button
        className={visualMode === 'QUIZ' ?
          quizbuttonClass(selected, choices[2]) :
          visualMode === 'ANSWERS' ?
            answersButtonClass(selected, choices[2], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return visualMode === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[2]}</button>
      <button
        className={visualMode === 'QUIZ' ?
          quizbuttonClass(selected, choices[3]) :
          visualMode === 'ANSWERS' ?
            answersButtonClass(selected, choices[3], correct_answer) : ''
        }
        onClick={event => {
          const choice = event.target.innerText;
          return visualMode === 'QUIZ' ? updateSelected(question, choice) : null;
        }}
      >{choices[3]}</button>
      <div className="line" />
    </div>
  );
}