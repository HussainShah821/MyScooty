import React from 'react';
import { FormLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function Contact() {
  return (
    <>
   
    

  
    <Form>
      <Row className='w-100 ps-4 pt-2'>
      <Form.Control className= "inputlabels" placeholder="Nom complet" />
      </Row>
      <Row className='mt-3 w-100 mx-auto mb-2'>
        <Col>
          <Form.Control className= "inputlabels" placeholder="Téléphone *" />
        </Col>
        <Col>
          
          <Form.Control className= "inputlabels" type="email" placeholder="E-mail *" />
        </Col>
      </Row>
      <Row className='w-100 ps-4 mb-2 pt-2'>
        <FormLabel className='text-white text-start'>Message</FormLabel>
        <Form.Control as="textarea" className='textarea' rows={3} placeholder="Write your message here..."/>
     
      </Row>
    </Form>
 



</>
  );
}

export default Contact;
