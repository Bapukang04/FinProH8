const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '814b0cd8';
const PARAM_ALL = 't';
const PARAM_DETAILS = 'i';
 


export const fetchMovies = async (query) => {
  const response = await fetch(`${API_URL}?${PARAM_ALL}=${query}&apikey=${API_KEY}`);
  console.log(query,"========>>")
  const data = await response.json();
  return data.Search || [];
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${API_URL}?${PARAM_DETAILS}=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};
