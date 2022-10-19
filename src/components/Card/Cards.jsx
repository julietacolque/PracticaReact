import React from 'react';
import Card from 'react-bootstrap/Card';

function Cards(props){
    const {name,username,email}= props.user
    return(
    <>
    <Card>
      <Card.Body>
        <Card.Title>{name} {username}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
      </Card.Body>
    </Card>
    
    </>);
}
export default Cards;