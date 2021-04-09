import { applyMiddleware } from 'redux';
import { apiError, apiSuccess, API_REQUEST } from 'Store/actions/api.actions';

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);
  console.log('middleWare called');
  console.log(action.type)
  if (action.type === `${API_REQUEST}`) {
    const { entity, method, url } = action.payload.meta;
    console.log(action.payload.meta)
    try {
      const res = await fetch(url, {method})
      const data = await res.json();
      console.log(data)
      dispatch(apiSuccess(data, entity));
    } catch (error) {
      dispatch(apiError(error, entity));
      console.log(error);
    }
  }

};

export default apiMiddleware;