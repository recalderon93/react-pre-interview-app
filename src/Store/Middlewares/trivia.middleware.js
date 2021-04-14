import {
  generatesTrivia, isAnswerCorrect, isAnswerIncorrect, TRIVIA_ACTIONS,
} from 'Store/Trivia/trivia.actions';

const triviaMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
  next(action);
  const { trivia, countries } = getState();
  const { type } = action;
  if (/trivia/i.test(type)) {
    switch (type) {
      case TRIVIA_ACTIONS.VERIFY_ANSWER:
        if (RegExp(trivia.correctAnswer, 'i').test(trivia.userAnswer)) {
          dispatch(isAnswerCorrect());
          dispatch(generatesTrivia(trivia.controlArray, countries.countriesList));
        } else {
          dispatch(isAnswerIncorrect());
        }
        break;
      default:
        break;
    }
  }
};

export default triviaMiddleware;
