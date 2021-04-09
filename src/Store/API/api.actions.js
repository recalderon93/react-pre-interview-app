export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const API_ACTIONS = {
 REQUEST: 'API_REQUEST',
 SUCCESS: 'API_SUCCESS',
 ERROR: 'API_ERROR',
};

export const apiRequest = (url, method, body, entity) => ({
 type: `${entity.toUpperCase()} ${API_REQUEST}`,
 payload: {
  meta: { url, method, entity },
  data: body,
 },
});
export const apiSuccess = (response, entity) => ({
 type: `${entity.toUpperCase()} ${API_SUCCESS}`,
 payload: {
  data: response,
  meta: { entity },
 },
});
export const apiError = (error, entity) => ({
 type: `${entity.toUpperCase()} ${API_ERROR}`,
 payload: {
  meta: { entity },
  data: error,
 },
});