/* eslint-disable no-plusplus */
import produce from 'immer';
import { TRIVIA_ACTIONS } from './trivia.actions';

const TRIVIA_INITIAL_STATE = {
  controlArray: [],
  userAnswer: '',
  selectedCountry: {},
  correctAnswer: '',
  noCorrectAns: 0,
  noAttemps: 0,
  noRevealedAns: 0,
  reveal: false,
};

const triviaReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRIVIA_ACTIONS.GENERATES_TRIVIA:
      // eslint-disable-next-line no-unused-expressions
      draft.reveal = false;
      draft.userAnswer = '';
      draft.controlArray.push(payload.index);
      draft.selectedCountry = payload.selectedCountry;
      draft.correctAnswer = payload.selectedCountry.translations.es;
      break;
    case TRIVIA_ACTIONS.REVEAL_ANSWER:
      if (draft.reveal !== true) {
        draft.reveal = !draft.reveal;
        draft.noRevealedAns++;
      }
      break;
    case TRIVIA_ACTIONS.ANSWER_CHANGE:
      draft.userAnswer = payload.value;
      break;
    case TRIVIA_ACTIONS.CORRECT:
      draft.noCorrectAns++;
      draft.noAttemps++;
      break;
    case TRIVIA_ACTIONS.INCORRECT:
      draft.noAttemps++;
      break;
    default:
      break;
  }
}, TRIVIA_INITIAL_STATE);

export default triviaReducer;
