export const COUNTRIES_ACTIONS = {
  TOGGLE_CONTINENT_SELECTION: '[COUNTRIES] Toggle Continent Selection',
  TOGGLE_ALL_CONTINENTS: '[COUNTRIES] Toggle All Continents',
};

export const toggleContient = (continent) => ({
  type: COUNTRIES_ACTIONS.TOGGLE_CONTINENT_SELECTION,
  payload: {
    continent,
  },
});

export const toggleAllContinents = (continentsList) => ({
  type: COUNTRIES_ACTIONS.TOGGLE_ALL_CONTINENTS,
  payload: {
    continentsList,
  },
});
