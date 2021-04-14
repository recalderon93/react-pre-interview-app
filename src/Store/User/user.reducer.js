import produce from 'immer';
import CONSTANTS from 'Utils/Constants';

import { USER_ACTIONS } from './user.actions';

const USER_INITIAL_STATE = {
  name: '',
};
const userReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.CHANGE:
      draft.name = payload.name;
      break;
    case USER_ACTIONS.SUBMIT:
      payload.history.push(CONSTANTS.ROUTES.SELECT_CONTINENTS);
      break;

    default:
      break;
  }
}, USER_INITIAL_STATE);

export default userReducer;
