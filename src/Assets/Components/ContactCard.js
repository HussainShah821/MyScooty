import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <>
    <Card className='transparent-bg homecard'>
      <Card.Body className=' p-2'>
        <Card.Title><h1 className='text-white text-center title'>Dolce Vita</h1></Card.Title>
        <Card.Text className='text-center pt-4 text-white'>
        Léger et rapide à charger le Dolce Vita est notre modèle milieu de gamme qui vous 
        sera utile pour tous types d’usage personnel comme professionnel. <br></br><br></br>Fini le stress 
        des transports ou les pleins d’essence, avec votre Dolce Vita circuler librement et sans contrainte !
        </Card.Text>
        <Button variant="primary" className='text-center card-button'>Réserver un essai</Button>
        <Card.Text className='text-white text-center'>
        Voir les caractéristiques
        </Card.Text>
      </Card.Body>
    </Card>
<h5 className='text-white nano'>Nano 300 Watts</h5>

</>
  );
}

export default Contact;
