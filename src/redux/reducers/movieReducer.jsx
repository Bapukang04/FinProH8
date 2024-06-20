const initialState = {
    movies: [],
    loading: false,
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          loading: false,
          movies: action.payload,
        };
      case 'FETCH_GAGAL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  