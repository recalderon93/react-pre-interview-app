import produce from 'immer';
import { UI_ACTIONS } from './ui.actions';

export const LOADER_INITAL_STATE = { loader: false, darkMode: false };

const uiReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case UI_ACTIONS.SET_LOADER:
      draft.loader = payload.loading;
      break;
    case UI_ACTIONS.TOGGLE_DARK_MODE:
      draft.darkMode = !draft.darkMode;
      break;
    default:
      break;
  }
}, LOADER_INITAL_STATE);

export default uiReducer;
