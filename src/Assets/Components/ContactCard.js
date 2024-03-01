import React from 'react';
import { Button, FormLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Contact() {
  

  return (
    <>
     <Card className='transparent-bg w-25'>
        <Card.Body className='homecard p-2'>
          <Card.Title><h1 className='text-white heading px-5 pb-2 text-center title'>Nous contacter</h1></Card.Title>
          <Form>
        <Row className='w-100 ps-4 pt-2'>
          <Form.Control 
            id="name" 
            className="inputlabels" 
            placeholder="Nom complet" 
           
          />
        </Row>
        <Row className='mt-3 w-100 mx-auto mb-2'>
          <Col>
            <Form.Control className="inputlabels" placeholder="Téléphone *" />
          </Col>
          <Col>
            <Form.Control id="email" className="inputlabels" type="email" placeholder="E-mail *"  />
                      </Col>
        </Row>
        <Row className='w-100 ps-4 mb-2 pt-2'>
          <FormLabel className='text-white text-start'>Message</FormLabel>
          <Form.Control as="textarea" className='textarea' rows={3} placeholder="Write your message here..." />
        </Row>
      </Form>
          
          <Row>
          <Link to="/Reservation"><Button variant="primary" className='card-button w-50 px-auto'>
      Envoyer
    </Button></Link>
          </Row>       
        </Card.Body>
      </Card>

     
    </>
  );
}

export default Contact;
