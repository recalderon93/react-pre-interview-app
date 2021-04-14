import { isAnswerCorrect, isAnswerIncorrect, TRIVIA_ACTIONS } from 'Store/Trivia/trivia.actions';

const triviaMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);
  const { type, payload } = action;
  if (type.match(/trivia/i)) {
    switch (type) {
      case TRIVIA_ACTIONS.VERIFY:
        if (payload.verification) {
          dispatch(isAnswerCorrect('', ''));
        } else {
          dispatch(isAnswerIncorrect('', ''));
        }
        break;
      default:
        break;
    }
  }
};

export default triviaMiddleware;
