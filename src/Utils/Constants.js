const CONSTANTS = {
  CONTINENTS: ['Africa', 'America', 'Asia', 'Europa', 'Oceania'],
  API_END_POINTS: {
    ALL: {
      URL: 'https://restcountries.eu/rest/v2/all',
    },
    GET_URL: (continent) => ({
      URL: `https://restcountries.eu/rest/v2/region/${continent.toLowerCase()}`,
    }),
  },
  ROUTES: {
    LOGIN: '/',
    SELECT_CONTINENTS: '/selectContinents',
    COUNTRIES_LIST: '/countriesList',
    TRIVIA: '/trivia',
  },
};

export default CONSTANTS;
