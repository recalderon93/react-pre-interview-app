export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = (url, method, body, entity) => ({
  type: `${API_REQUEST}`,
  payload: {
    meta:{url, method, entity},
    data:body,
  }
})
export const apiSuccess = (response, entity) => ({
  type: `${API_SUCCESS}`,
  payload: {
    data: response,
    meta:{entity},
  }
})
export const apiError = (error, entity) => ({
  type: `${API_ERROR}`,
  payload: {
    meta:{entity},
    data:error,
  }
})