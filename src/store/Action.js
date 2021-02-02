export const setSelectedSeats = (seat) => ({ type: actionType.setSelectedSeats, seat });
export const removeSelectedSeats = (seat) => ({ type: actionType.removeSelectedSeats, seat });
export const setSelectedMovie = (movie) => ({ type: actionType.setSelectedMovie, movie });
export const confirmSelectedSeats = () => ({ type: actionType.confirmSelectedSeats });

// Action type
export const actionType = {
  setSelectedSeats: "setSelectedSeats",
  setSelectedMovie: "setSelectedMovie",
  confirmSelectedSeats: 'confirmSelectedSeats',
  removeSelectedSeats: 'removeSelectedSeats'
};
