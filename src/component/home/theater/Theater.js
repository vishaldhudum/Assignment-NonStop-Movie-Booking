import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import './Theater.css'

import { Row, Button } from '../../../../node_modules/react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

import { setSelectedSeats, removeSelectedSeats } from "../../../store/Action";

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

function Theater(props) {

  const [state, setState] = React.useState({ selectedSeats: [], error: "" });

  React.useEffect(() => {
    setState({ ...state, selectedSeats: [] })
  }, [props.bookedSeats]);

  const getSeatsGrid = () => {
    return rows.map((row) => {
      return (
        <Row className={`seat-rows ${row}`} key={row}>
          {getColums(row)}
        </Row>
      )
    })
  }

  const getColums = (row) => {
    let seat = [];
    for (let i = 1; i <= 10; i++) {
      if (i === 6) {
        seat.push(<div key={row + '-empty'} className="empty-space"></div>)
      }
      seat.push(getSeat(row + i))
    }

    return seat;
  }

  const getSeat = seatNumber => {
    let seatClass = '';

    if (props.selectedSeats.includes(seatNumber)) {
      seatClass = 'selectedSeat';
    } else if (props.bookedSeats.includes(seatNumber)) {
      seatClass = 'occupiedSeat';
    } else {
      seatClass = 'unOccupiedseat';
    }

    return (
      <div className={"single-seat " + seatClass} key={seatNumber} onClick={() => handleSeatClick(seatNumber)}>
        <FontAwesomeIcon icon={faCouch} className='seat' />
        <div className="seat-number">{seatNumber}</div>
      </div>
    )
  }

  const handleSeatClick = seatNumber => {
    if (!props.selectedSeats.includes(seatNumber) && !props.bookedSeats.includes(seatNumber)) {
      props.setSelectedSeats(seatNumber);
    } else if (props.selectedSeats.includes(seatNumber)) {
      props.removeSelectedSeats(seatNumber);
    }
  }

  const handleBooking = () => {
    props.history.push('./confirmation')
  }

  if (props.selectedMovie.id === '0') {
    return null;
  }

  return (
    <div className="theater">
      <div className="seat-wrapper">
        {getSeatsGrid()}
      </div>
      <div className="text-center">
        {props.selectedSeats.length !== 0 &&
          <Button
            variant="success"
            onClick={handleBooking}
          >
            Proceed
          </Button>
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
    selectedSeats: state.selectedSeats,
    bookedSeats: state.selectedMovie.seatsBooked
  };
};

const mapDispatchToProps = dispatch => ({
  setSelectedSeats: seat => dispatch(setSelectedSeats(seat)),
  removeSelectedSeats: seat => dispatch(removeSelectedSeats(seat)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Theater));