import { useState } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';
import Question from './Question';
import './index.css';

export default function Quiz(props) {
const questionElements = props.questions.map(element => {
    let { question, correct_answer, incorrect_answers } = element;
    // Convert HTML entities into characters.
    question = decode(question);
    correct_answer = decode(correct_answer);
    incorrect_answers = incorrect_answers.map(answer => decode(answer));
    // Add & shuffle all answers to the choices array.
    const choices = incorrect_answers;
    choices.push(correct_answer);
    choices.sort(() => Math.random() - 0.5);
    // Return each element as a Question component.
    return (
      <Question
        key={nanoid()}
        question={question}
        choices={choices}
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