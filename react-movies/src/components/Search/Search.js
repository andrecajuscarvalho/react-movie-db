import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

function Search({
  pathnameVal,
  searchVal,
  placeholderVal,
  actionOnSubmit,
  setSearchVal,
}) {
  const navigate = useNavigate();

  const actionOnChange = (e) => {
    navigate({ pathname: pathnameVal, search: `query=${e.target.value}` });
    setSearchVal(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={actionOnSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <i class="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder={placeholderVal}
            aria-describedby="basic-addon1"
            value={searchVal}
            onChange={actionOnChange}
          />
        </InputGroup>
      </form>
    </Container>
  );
}

export default Search;
