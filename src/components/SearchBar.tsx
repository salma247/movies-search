import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};
function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Type Movie</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
    </>
  );
}

export default SearchBar;
