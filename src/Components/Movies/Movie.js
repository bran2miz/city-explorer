import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../App.css';

class Movie extends Component {


  render() {


    return (


<CardGroup className='shadow-sm p-3 mb-5 bg-white rounded' style={{ marginTop: '5rem' }}>
      <Card className="movie-card">
      <Card.Body>
        <Card.Title className='movieTitle'><br />{this.props.movie.data.title}</Card.Title>
        <Card.Text >
          {this.props.movie.data.overview}
          <br></br>
          
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom"  src={`https://image.tmdb.org/t/p/original${this.props.movie.data.poster_path}`} height='60%' />
      <Card.Footer>
      <small className="text-muted">
          Rating: {this.props.movie.data.popularity}
        </small>
      </Card.Footer>
    </Card>
    </CardGroup>




    );
  }
}
export default Movie;