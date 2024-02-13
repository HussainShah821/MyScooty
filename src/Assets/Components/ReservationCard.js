import React from 'react';
import { Button, FormLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Reservation() {
  
  return (
    <>
      <Form>
        <Row className='mt-3 w-100 mx-auto mb-2'>
          <Col>
            <Form.Control className="inputlabels" placeholder="Nom *" />
          </Col>
          <Col>
            <Form.Control className="inputlabels" type="email" placeholder="Code postal *" />
          </Col>
        </Row>

        <Row className='mt-3 w-100 mx-auto mb-2'>
          <Col>
            <Form.Control className="inputlabels" placeholder="Téléphone *" />
          </Col>
          <Col>
            <Form.Control className="inputlabels" type="email" placeholder="E-mail *" />
          </Col>
        </Row>

        <Row className='w-100 ps-4 pt-2'>
          <Form.Control className="inputlabels" placeholder="Pour quel usage ? *" />
        </Row>

        <Row className='w-100 ps-4 mb-2 pt-2'>
          <FormLabel className='text-white text-start'>Vos disponibilités *</FormLabel>
          </Row>
          <Row>
            <Col>
              <Button className="custom-button">Les mardis<br></br> 16h - 19h</Button>{' '}
            </Col>
            <Col>
              <Button className="custom-button">Les jeudis <br></br> 16h - 19h</Button>{' '}
            </Col>
            <Col>
              <Button className="custom-button">Les samedis <br></br>10h - 15h</Button>{' '}
            </Col>
          </Row>
        

        <Row className='w-100 ps-4 mb-2 pt-2'>
          <FormLabel className='text-white text-start'>Message</FormLabel>
          <Form.Control as="textarea" className='textarea' rows={3} placeholder="" />
        </Row>
      </Form>
    </>
  );
}

export default Reservation;