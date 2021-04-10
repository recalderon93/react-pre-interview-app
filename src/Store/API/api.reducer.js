import produce from 'immer';
import { API_ACTIONS } from './api.actions';

const ENTITY = '[COUNTRIES]';

const countriesReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${ENTITY} ${API_ACTIONS.REQUEST}`:
      break;
    case `${ENTITY} ${API_ACTIONS.SUCCESS}`:
      break;
    case `${ENTITY} ${API_ACTIONS.ERROR}`:
      break;
    default:
      break;
  }
});
