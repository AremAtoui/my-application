import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import EditParfum from './EditParfum';
function ParfumCard({ Parfums }) {
  return (
    <div >

      <div className='f3-00000'>
        <Card style={{ width: '18rem', height: "200px", margin: "10px" }}>
          < Link style={{ textDecoration: "none", color: "black" }} to={`/trailer/${Parfums.name}`}> <Card.Img variant="top" src={Parfums.image} /></Link>
          <Card.Body>
            <Card.Title style={{ fontSize: "16px" }}>{Parfums.name}</Card.Title>
            <Card.Text>
              {Parfums.description}
            </Card.Text>
            <Card.Text>
              {Parfums.price}


            </Card.Text>

          </Card.Body>
          <EditParfum el={Parfums} />
        </Card></div>
      

    </div >

  )
}

export default ParfumCard
