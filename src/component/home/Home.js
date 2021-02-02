import React from 'react'

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Row, Col } from '../../../node_modules/react-bootstrap'

import SelectDropdown from '../../container/selectDropdown/SelectDropdown'
import Theater from './theater/Theater'

import './Home.css'

import { setSelectedMovie } from "../../store/Action";

function Home(props) {

  const handleChange = (e) => {
    if (e.target.value !== '0') {
      let selectedMovie = props.moviesList.filter(movie => {
        return movie.id === parseInt(e.target.value)
      });

      props.setSelectedMovie(selectedMovie[0]);
    } else {
      props.setSelectedMovie({id: 0, title: ''});

    }
  }

  const getBookedSeats = () => {
    let selectedMovie = props.moviesList.filter(movie => {
      return movie.id === parseInt(props.selectedMovie)
    });

    if (selectedMovie.length)
      return selectedMovie[0].seatsBooked
    else
      return []
  }

  return (
    <div className="home">
      <Container>
        <Row>
          <Col className="text-center">
            <h4>What you want to watch</h4>
        </Col>
        </Row>
        <Row className="movie-drop-down">
          <Col sm="6" lg="5">
            <SelectDropdown
              name="movie"
              options={props.moviesList}
              value={props.selectedMovie.id}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Theater />
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    moviesList: state.moviesList,
    selectedMovie: state.selectedMovie
  };
};

const mapDispatchToProps = dispatch => ({
  setSelectedMovie: movie => dispatch(setSelectedMovie(movie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));