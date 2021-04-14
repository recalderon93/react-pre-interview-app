import produce from 'immer';
import { TRIVIA_ACTIONS } from './trivia.actions';

const TRIVIA_INITIAL_STATE = {
  controlArray: [],
  userAnswer: '',
  selectedCountry: {},
  correctAnswer: '',
  noCorrectAns: '',
  noAttemps: '',
  noRevealedAns: '',
};

const triviaReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRIVIA_ACTIONS.GENERATES_TRIVIA:
      draft.controlArray = draft.controlArray.push[payload.index];
      draft.selectedCountry = payload.selectedCountry;
      draft.correctAnswer = payload.selectedCountry.name;
      break;
    default:
      break;
  }
}, TRIVIA_INITIAL_STATE);

export default triviaReducer;
