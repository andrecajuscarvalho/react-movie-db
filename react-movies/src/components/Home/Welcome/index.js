import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Welcome = () => {
  return (
    <Container className="text-center">
      <Card border="light">
        <Card.Body>
          <Card.Text>
            <q>
              We are excited to welcome you to <b>MSPdb</b>, a platform that
              allows you to lightning search for <b>Movies</b>, <b>Series</b>{" "}
              and <b>People</b>! It is just an informative website. We are not
              trying to replace YTS, so we ask the authorities not to track our
              IP address and arrest us.
            </q>
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
    </Container>
  );
};

export default Welcome;
