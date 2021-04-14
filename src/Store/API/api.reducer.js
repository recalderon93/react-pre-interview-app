import produce from 'immer';
import { API_ACTIONS } from './api.actions';

const ENTITY = '[COUNTRIES]';

const COUNTRIES_LIST_INITIAL_STATE = {
  countriesList: [],
};

const countriesApiReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${ENTITY} ${API_ACTIONS.REQUEST}`:
      draft.countriesList = [];
      break;
    case `${ENTITY} ${API_ACTIONS.SUCCESS}`:
      draft.countriesList = draft.countriesList.concat(payload.data);
      break;
    case `${ENTITY} ${API_ACTIONS.ERROR}`:
      // eslint-disable-next-line no-alert
      alert('Oops hubo un error en la conexion con el Servidor');
      break;
    default:
      break;
  }
}, COUNTRIES_LIST_INITIAL_STATE);

export default countriesApiReducer;
