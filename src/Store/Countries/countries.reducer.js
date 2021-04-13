import produce from 'immer';
import toggleSelectionArray from 'Utils';
import CONSTANTS from 'Utils/Constants';
import { COUNTRIES_ACTIONS } from './countries.actions';

export const CONTINENTS_INITAL_STATE = {
  continentsList: [],
};

const continentsReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTRIES_ACTIONS.TOGGLE_CONTINENT_SELECTION:
      draft.continentsList = toggleSelectionArray(draft.continentsList, payload.continent);
      break;
    case COUNTRIES_ACTIONS.TOGGLE_ALL_CONTINENTS:
      if (
        payload.continentsList === CONSTANTS.CONTINENTS
      ) {
        draft.continentsList = [];
      } else {
        draft.continentsList = CONSTANTS.CONTINENTS;
      } break;
    default:
      break;
  }
}, CONTINENTS_INITAL_STATE);

export default continentsReducer;
