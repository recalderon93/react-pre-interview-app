export const UI_ACTION = '[UI] SetLoader';
export const UI_ACTIONS = {
  SET_LOADER: '[UI] Set Loader',
  TOGGLE_DARK_MODE: '[UI] Toggle Dark Mode',
};
export const setLoader = (loading) => {
  console.log(loading);
  return ({

    type: UI_ACTIONS.SET_LOADER,
    payload: {
      loading,
    },
  });
};

export const toggleDarkMode = () => ({
  type: UI_ACTIONS.TOGGLE_DARK_MODE,
});
