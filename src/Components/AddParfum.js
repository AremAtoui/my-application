import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addParfum } from '../redux/ParfumSlice/ParfunSlice';
import { useDispatch } from 'react-redux';
function AddParfum() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [parfum, setparfum] = useState([
    {
      id: Math.random(),
      image: "",
      name: "",
      description: "",
      price: "   "
    }
  ])
  const dispatch = useDispatch();
  return (
    <div>


      <Button variant="primary" onClick={handleShow}>
        Add Parfums
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Parfum heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="" placeholder="Enter image" onChange={(e) => setparfum({ ...parfum, image: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e) => setparfum({ ...parfum, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" onChange={(e) => setparfum({ ...parfum, description: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter price" onChange={(e) => setparfum({ ...parfum, price: e.target.value })} />
            </Form.Group>




          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { dispatch(addParfum(parfum)); handleClose() }}>
            Add parfum
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddParfum