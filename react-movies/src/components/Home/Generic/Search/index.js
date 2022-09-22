import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search({ searchVal, actionOnSubmit, setSearchVal }) {
  const actionOnChange = (e) => {
    setSearchVal(e.target.value);
    console.log(searchVal);
  };

  return (
    <Container>
      <form onSubmit={actionOnSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for movies, series and people..."
            value={searchVal}
            onChange={actionOnChange}
            onSubmit={actionOnSubmit}
          />
        </InputGroup>
      </form>
    </Container>
  );
}

export default Search;
