import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editParfum } from '../redux/ParfumSlice/ParfunSlice';
function EditParfum({ el }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    id: Math.random(),
    image: el.image,
    name: el.name,
    description: el.description,
    price: el.price
  });
  const dispatch = useDispatch();
  return (
    <div>


      <Button variant="primary" onClick={handleShow}>
        Edit Parfums
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Parfum heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="" placeholder="Enter image" onChange={(e) => setedited({ ...edited, image: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e) => setedited({ ...edited, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" onChange={(e) => setedited({ ...edited, description: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter price" onChange={(e) => setedited({ ...edited, price: e.target.value })} />
            </Form.Group>




          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { dispatch(editParfum({ id: el.id, edited })); handleClose() }}>
            Edit parfum
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditParfum