export const UI_ACTION = '[UI] SetLoader';

const setLoader = (loading) => ({
  type: UI_ACTION,
  payload: {
    loading,
  },
});
export default setLoader;
