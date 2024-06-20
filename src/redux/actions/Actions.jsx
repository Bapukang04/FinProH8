import { fetchMovies } from '../../services/api';

export const fetchRequest = () => {
  return {
    type: 'FETCH_REQUEST',
  };
};

export const fetchSuccess = (movies) => {
  return {
    type: 'FETCH_SUCCESS',
    payload: movies,
  };
};

export const fetchGagal = (error) => {
  return {
    type: 'FETCH_FAILURE',
    payload: error,
  };
};

export const getListFilm = (query) => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const movies = await fetchMovies(query);
    dispatch(fetchSuccess(movies));
  } catch (error) {
    dispatch(fetchGagal(error.message));
  }
};
