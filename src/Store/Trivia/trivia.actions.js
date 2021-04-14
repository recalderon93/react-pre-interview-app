import randomIndex from 'Utils/randomIndex';

export const TRIVIA_ACTIONS = {
  GENERATES_TRIVIA: '[TRIVIA] Generates Random Question',
  VERIFY_ANSWER: '[TRIVIA] Verify Answer',
  REVEAL_ANSWER: '[TRIVIA] Reveals answer',
  CORRECT: '[TRIVIA] correct Answer',
  INCORRECT: '[TRIVIA] incorrect Answer',
  ANSWER_CHANGE: '[TRIVIA] onChange answer',
};

export function generatesTrivia(controlArray, countriesList) {
  const index = randomIndex(countriesList.length, controlArray);
  const selectedCountry = countriesList[index];
  return ({
    type: TRIVIA_ACTIONS.GENERATES_TRIVIA,
    payload: {
      index,
      selectedCountry,
    },
  });
}
export function onChangeAnswer(value) {
  return ({
    type: TRIVIA_ACTIONS.ANSWER_CHANGE,
    payload: { value },
  });
}
export function verifyAnswer() {
  return ({
    type: TRIVIA_ACTIONS.VERIFY_ANSWER,
    payload: {
    },
  });
}

export function isAnswerCorrect() {
  return ({
    type: TRIVIA_ACTIONS.CORRECT,
    payload: {

    },
  });
}
export function revealAnswer() {
  return ({
    type: TRIVIA_ACTIONS.REVEAL_ANSWER,
    payload: {

    },
  });
}
export function isAnswerIncorrect() {
  return ({
    type: TRIVIA_ACTIONS.INCORRECT,
    payload: {
    },
  });
}
