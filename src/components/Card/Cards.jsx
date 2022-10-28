import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import style from "./style.module.css";

function Cards(props) {
  const { name, username, email } = props.user;
  return (
    <Col sm={12} md= {12} lg= {4}>
      <Card className={style.styleCard}>
        <Card.Body>
          <Card.Title>
            {name} {username}
          </Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default Cards;
