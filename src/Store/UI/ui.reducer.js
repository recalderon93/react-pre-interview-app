import produce from 'immer';
import { UI_ACTION } from './ui.actions';

export const LOADER_INITAL_STATE = { loader: false };

const uiReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case UI_ACTION:
      draft.loader = payload.loading;
      break;

    default:
      break;
  }
}, LOADER_INITAL_STATE);

export default uiReducer;
