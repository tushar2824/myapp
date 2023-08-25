import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Imgcard = (val) => {
    const [count, Setcount]=useState(0);
    const handleclick=()=>{
        console.log("button click", count);
        Setcount(count+1)
    }
    const handledelete=()=>{
        console.log("button click", count);
        Setcount(count-1)
    }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgurl} style={{width:"18rem" , height:"15rem"}} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>{val.desc}
        </Card.Text>
        <Button onClick={handleclick}variant="primary">Add</Button>{count}
        <Button onClick={handledelete}variant="primary">Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Imgcard
