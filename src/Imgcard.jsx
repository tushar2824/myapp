import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Imgcard = (val) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgurl} style={{width:"18rem" , height:"15rem"}} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>{val.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Imgcard
