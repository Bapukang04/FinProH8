import { fetchMovies } from '../../services/api';

export const fetchMoviesRequest = () => {
  return {
    type: 'FETCH_MOVIES_REQUEST',
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: 'FETCH_MOVIES_FAILURE',
    payload: error,
  };
};

export const getMovies = (query) => async (dispatch) => {
  dispatch(fetchMoviesRequest());
  try {
    const movies = await fetchMovies(query);
    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
