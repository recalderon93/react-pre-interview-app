import { apiRequest } from 'Store/API/api.actions';
import CONSTANTS from 'Utils/Constants';

export default function continentSelectionHandler(dispatch, continentsList, history) {
  let requestList = [];
  let continentsTraslated;
  if (continentsList.length === CONSTANTS.CONTINENTS) {
    requestList = ['all'];
  } else {
    continentsTraslated = continentsList.map((item) => {
      let res;
      switch (item.toLowerCase()) {
        case 'africa':
          res = 'africa';
          break;
        case 'america':
          res = 'americas';
          break;
        case 'asia':
          res = 'asia';
          break;
        case 'europa':
          res = 'europe';
          break;
        case 'oceania':
          res = 'oceania';
          break;
        default:
          break;
      }
      return res;
    });
  }
  requestList = requestListCreator(continentsTraslated);
  if (requestList.length > 0) {
    dispatch(apiRequest(requestList, 'get', {}, 'countries', history));
  }
}

function requestListCreator(list) {
  let requestList = [];
  if (list.length === CONSTANTS.CONTINENTS.length) {
    requestList = [CONSTANTS.API_END_POINTS.ALL.URL];
  } else {
    requestList = list.map((item) => CONSTANTS.API_END_POINTS.GET_URL(item).URL);
  }
  return requestList;
}
