import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from "react-query";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "./hooks/useDebounce";
import { getMovies } from "./services/api";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, isLoading } = useQuery(
    ["movies", debouncedSearchTerm],
    () => getMovies(debouncedSearchTerm),
    {
      enabled: debouncedSearchTerm.length > 0,
    }
  );
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="App">
        <Container fluid className="mt-3 p-3" style={{ maxWidth: "70%", backgroundColor: "lightgray" }}>
          <Row>
            <Col xs={12}>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Col>
          </Row>
          <Row className="mt-3">
            {data?.map((movie: any) => (
              <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3} className="mt-3">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
  );
}

export default App;
