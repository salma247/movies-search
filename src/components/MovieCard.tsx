import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type MovieCardProps = {
  movie: any;
};

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Year}
        </Card.Text>
        <Card.Text>
          {movie.Type}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;