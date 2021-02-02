import { actionType } from "./Action";

import { moviesList } from '../data/Movies'

const initialState = {
  moviesList: moviesList,
  selectedSeats: [],
  selectedMovie: {
    id: '0',
    name: '',
    seatsBooked: []
  }
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.setSelectedSeats:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.seat]
      };
    case actionType.removeSelectedSeats:
      let selectedSeats = state.selectedSeats.filter(item => item !== action.seat)
      console.log(selectedSeats);
      
      return {
        ...state,
        selectedSeats: selectedSeats
      };
    case actionType.setSelectedMovie:
      return {
        ...state,
        selectedMovie: action.movie
      };
    case actionType.confirmSelectedSeats:
      return updateMovieState(state)
    default:
      return {
        ...state
      };
  }
};

const updateMovieState = (state) => {
  state.moviesList.forEach(movie => {
    if (movie.id === state.selectedMovie.id) {
      movie.seatsBooked = [...movie.seatsBooked, ...state.selectedSeats]
      state.selectedMovie = movie;
    }
  });
  return {
    ...state,
    selectedSeats: []
  }
}

export default Reducer;