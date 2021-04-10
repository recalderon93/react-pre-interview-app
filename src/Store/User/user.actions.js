export const USER_ACTIONS = {
  CHANGE: '[USER] Change name',
  SUBMIT: '[USER] Submit name',
};

export const userNameChange = (name) => ({
  type: USER_ACTIONS.CHANGE,
  payload: {
    name,
  },
});

export const userNameSubmit = (history) => ({
  type: USER_ACTIONS.SUBMIT,
  payload: {
    history,
  },
});
