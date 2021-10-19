import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends Component {
  render() {
    return (
      <Card style={{ width: '30.3rem', marginTop: '5rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Date: </strong> {this.props.weather.date}</ListGroup.Item>
          <ListGroup.Item><strong>Weather Forecast: </strong>{this.props.weather.description}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}
export default Weather;