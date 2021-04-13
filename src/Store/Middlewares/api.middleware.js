import { apiError, apiSuccess } from 'Store/API/api.actions';
import { setLoader } from 'Store/UI/ui.actions';

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);
  if (action.type.match(/API_REQUEST/)) {
    const {
      entity, method, urls, history,
    } = action.payload.meta;
    let allData;
    try {
      dispatch(setLoader(true));
      const resF = await Promise.all(urls.map((url) => fetch(url, { method })));
      const dataF = await Promise.all(resF.map((res) => res.json()));
      allData = [].concat(...dataF);
      dispatch(apiSuccess(allData, entity));
      history.push('/countriesList');
    } catch (error) {
      console.log(error);
      dispatch(apiError(error, entity));
    }
  }
  if (action.type.match(/API_ERROR/) || action.type.match(/API_SUCCESS/)) {
    dispatch(setLoader(false));
  }
};

export default apiMiddleware;
