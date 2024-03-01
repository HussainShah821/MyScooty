import React, { useState } from 'react';
import { Button, FormLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    postalCode: '',
    telephone: '',
    email: '',
    usage: '',
    availability: [],
    message: ''
  });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleAvailabilityChange = (availability) => {
    setFormData({
      ...formData,
      availability
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    console.log(formData);

    setSubmitted(true);
    setFormData({
      name: '',
      postalCode: '',
      telephone: '',
      email: '',
      usage: '',
      availability: [],
      message: ''
    });
    setValidated(false);
  };

  return (
    <>
      <Card className='transparent-bg w-25'>
        <Card.Body className='homecard p-2'>
          <Card.Title><h1 className='text-white heading px-5 mx-2 pb-2 text-center title'>Réserver un essai</h1></Card.Title>

          {submitted ? (
            <h4 className=" text-center text-white">Form submitted successfully!</h4>
          ) : (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className='mt-4 w-100 mx-auto mb-2'>
                <Col>
                  <Form.Control
                    id="name"
                    className="inputlabels"
                    placeholder="Nom *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Ce champ est requis.</Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Control
                    id="postalCode"
                    className="inputlabels"
                    placeholder="Code postal *"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Ce champ est requis.</Form.Control.Feedback>
                </Col>
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

              <Row className='w-100 ps-4 pt-2'>
                <Form.Control
                  id="usage"
                  className="inputlabels"
                  placeholder="Pour quel usage ? *"
                  required
                  value={formData.usage}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">Ce champ est requis.</Form.Control.Feedback>
              </Row>

              <Row className='w-100 ps-4 mb-2 pt-2'>
                <FormLabel className='text-white text-start'>Vos disponibilités *</FormLabel>
              </Row>
              <Row>
                <Col>
                  <Button
                    className={`custom-button ${formData.availability.includes('mardis') ? 'selected' : ''}`}
                    onClick={() => handleAvailabilityChange('mardis')}
                  >
                    Les mardis<br />16h - 19h
                  </Button>
                </Col>
                <Col>
                  <Button
                    className={`custom-button ${formData.availability.includes('jeudis') ? 'selected' : ''}`}
                    onClick={() => handleAvailabilityChange('jeudis')}
                  >
                    Les jeudis<br />16h - 19h
                  </Button>
                </Col>
                <Col>
                  <Button
                    className={`custom-button ${formData.availability.includes('samedis') ? 'selected' : ''}`}
                    onClick={() => handleAvailabilityChange('samedis')}
                  >
                    Les samedis<br />10h - 15h
                  </Button>
                </Col>
              </Row>

              <Row className='w-100 ps-4 mb-2 pt-2'>
                <FormLabel className='text-white text-start'>Message</FormLabel>
                <Form.Control
                  id="message"
                  as="textarea"
                  className='textarea'
                  rows={3}
                  placeholder=""
                  value={formData.message}
                  onChange={handleChange}
                />
              </Row>

              <Row>
                <Button type="submit" variant="primary" className='card-button w-50 px-auto'>
                  Envoyer
                </Button>
              </Row>
            </Form>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Reservation;
