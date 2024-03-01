import React, { useState } from 'react';
import { Button, FormLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: ''
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false || formData.name === '' || formData.telephone === '' || formData.email === '') {
      setValidated(true);
    } else {
      setValidated(false);
      // Navigate to reservation page
      window.location.href = '/Reservation';
    }
  };

  return (
    <>
      <Card className='transparent-bg w-25'>
        <Card.Body className='homecard p-2'>
          <Card.Title><h1 className='text-white heading px-5 pb-2 text-center title'>Nous contacter</h1></Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='w-100 ps-4 pt-2'>
              <Form.Control
                id="name"
                className="inputlabels"
                placeholder="Nom *"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">Ce champ est requis.</Form.Control.Feedback>
            </Row>
            <Row className='mt-3 w-100 mx-auto mb-2'>
              <Col>
                <Form.Control
                  id="telephone"
                  className="inputlabels"
                  placeholder="Téléphone *"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">Ce champ est requis.</Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Control
                  id="email"
                  className="inputlabels"
                  type="email"
                  placeholder="E-mail *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">Ce champ est requis.</Form.Control.Feedback>
              </Col>
            </Row>
            <Row className='w-100 ps-4 mb-2 pt-2'>
              <FormLabel className='text-white text-start'>Message</FormLabel>
              <Form.Control as="textarea" className='textarea' rows={3} placeholder="Write your message here..." />
            </Row>
            <Row>
              <Button type="submit" variant="primary" className='card-button w-50 px-auto'>
                Envoyer
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Contact;
