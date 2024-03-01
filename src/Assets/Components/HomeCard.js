import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function HomeCard() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with options
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <>
      <Card className='transparent-bg w-25' data-aos="fade-right"> {/* Apply data-aos attribute here */}
        <Card.Body className='homecard p-2'>
          <Card.Title><h1 className='text-white heading text-center px-5 pb-2 title'>Dolce Vita</h1></Card.Title>

          <Card.Text className='text-center homecontent pt-4 px-4 text-white'>
            Léger et rapide à charger le Dolce Vita est notre modèle milieu de gamme qui vous
            sera utile pour tous types d’usage personnel comme professionnel. <br /><br />Fini le stress
            des transports ou les pleins d’essence, avec votre Dolce Vita circuler librement et sans contrainte !
          </Card.Text>
          <Row>
            <Link to="/Contact"><Button variant="primary" className='card-button w-50 px-auto'> Réserver un essai
            </Button></Link>
          </Row>
          <Card.Text className='text-white text-center'>
            Voir les caractéristiques
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default HomeCard;
