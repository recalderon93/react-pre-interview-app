import { apiError, apiSuccess, API_REQUEST } from 'Store/API/api.actions';

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);
  if (action.type === `${API_REQUEST}`) {
    const { entity, method, url } = action.payload.meta;
    try {
      const res = await fetch(url, { method });
      const data = await res.json();
      dispatch(apiSuccess(data, entity));
    } catch (error) {
      dispatch(apiError(error, entity));
    }
  }
};

export default apiMiddleware;
