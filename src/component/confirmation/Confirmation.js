import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './Confirmation.css'

import { confirmSelectedSeats } from '../../store/Action'

import { Container, Button } from '../../../node_modules/react-bootstrap'

function Confirmation(props) {

  React.useEffect(() => {
    if (props.selectedMovie.name === '')
      props.history.push('/')
  }, [props.selectedMovie, props.selectedSeats]);

  const getSelectedSeats = () => {
    let seatsString = ''
    props.selectedSeats.forEach(seat => {
      seatsString = seatsString + seat + ', '
    });
    return seatsString.substring(0, seatsString.length - 2);
  }

  const handleBooking = () => {
    props.confirmSelectedSeats();

  }

  const handleBack = () => props.history.push('/');

  return (
    <Container className="confirmation">
      {
        props.selectedSeats.length > 0
          ? <React.Fragment>
            <h3>Overview</h3>
            <p><b>Movie:</b> {props.selectedMovie.title}</p>
            <p><b>Seats:</b> {getSelectedSeats()}</p>
            <p><b>Cost:</b> {props.selectedMovie.cost * props.selectedSeats.length}</p>
            <Button variant="success" onClick={handleBooking}>
              Confirm booking
            </Button>
          </React.Fragment>
          : <React.Fragment>
            <h3>Booking confirmed</h3>
            <p>Enjoy!!</p>
            <Button variant="success" className="mt-20" onClick={handleBack}>
              Back
            </Button>
          </React.Fragment>
      }
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
    selectedSeats: state.selectedSeats,
  };
};

const mapDispatchToProps = dispatch => ({
  confirmSelectedSeats: () => dispatch(confirmSelectedSeats()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Confirmation));