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
};

export default CONSTANTS;
