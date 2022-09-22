import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PersonDetails from "../components/Home/People/PersonDetails/PersonDetails";
import getPersonInfo from "../endpoins/people/getPersonInfo";

export default function PeopleInfo() {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getPersonInfo(id, setPerson);
  }, [id]);

  return (
    <>
      <Container>
        <PersonDetails {...person} />
      </Container>
    </>
  );
}
