import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Exercises extends Component {
  state = {
    exercises: [],
    workout: "",
    date: "",
    weight: "",
    repetitions: "",
    comments: ""
  };

   componentDidMount() {
    this.loadExercises();
  }

  loadExercises = () => {
  	API.getExercises()
  		.then(res =>
  			this.setState({ exercises: res.data, workout: "", date: "", weight: "", repetitions:"", comments:""})
  			)
  		.catch(err => console.log(err));
  };

  deleteExercise = id => {
  	API.deleteExercise(id)
  		.then(res => this.loadExercises())
  		.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};

	  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.date && this.state.weight && this.state.repetitions) {
      API.saveExercise({
      	workout: this.state.workout,
        date: this.state.date,
        weight: this.state.weight,
        repetitions: this.state.repetitions,
        comments: this.state.comments
      })
        .then(res => this.loadExercises())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Exercise Are You Doing?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.workout}
                onChange={this.handleInputChange}
                name="workout"
                placeholder="Workout (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
              <Input
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="Weight (required)"
              />
               <Input
                value={this.state.repetitions}
                onChange={this.handleInputChange}
                name="repetitions"
                placeholder="Repetitions (required)"
              />
              <TextArea
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="Comments (Optional)"
              />

              <FormBtn
                disabled={!(this.state.workout && this.state.date && this.state.weight && this.state.repetitions)}
                onClick={this.handleFormSubmit}
              >
                Submit Workout
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Previous Workouts</h1>
            </Jumbotron>
            {this.state.exercises.length ? (
              <List>
                {this.state.exercises.map(exercise => (
                  <ListItem key={exercise._id}>
                    <Link to={"/exercises/" + exercise._id}>
                      <strong>
                        {exercise.workout} on {exercise.date} lifted {exercise.weight} lbs. for {exercise.repetitions} times.
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteExercise(exercise._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Exercises;












