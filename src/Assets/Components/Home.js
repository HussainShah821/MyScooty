import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contact from './ContactCard';
import HomeCard from './HomeCard';
import Reservation from './ReservationCard';
import { Row } from 'react-bootstrap';


const Home = () => {
  const [heading, setHeading] = useState("Dolce Vita");
  const [content, setContent] = useState(<HomeCard />);
  const [buttontxt,  setButtonText] = useState('Réserver un essai');
  const [bottomText,  setBottomText] = useState('Voir les caractéristiques');

  const changeCardContent = () => {
    setHeading((prevHeading) => (prevHeading === "Dolce Vita" ? "Nous contacter" : "Dolce Vita"));
    setContent((prevContent) => (prevContent.type === HomeCard ? <Contact /> : <HomeCard />));
    setButtonText((prevContent) => (prevContent === "Réserver un essai" ? "Envoyer" : "Réserver un essai"));
    setBottomText((prevContent) => (prevContent === "Voir les caractéristiques" ? " ": "Voir les caractéristiques"))
    if (buttontxt === "Envoyer") {
      setHeading("Réserver un essai");
      setContent(<Reservation/>);
      setButtonText("Envoyer");
      setBottomText(" ");
    }
  };

  return (
    <>
      <Card className='transparent-bg '>
        <Card.Body className='homecard p-2'>
          <Card.Title><h1 className='text-white heading text-center title'>{heading}</h1></Card.Title>
          <Card.Text className='text-center homecontent pt-4 text-white'>
            {content}
          </Card.Text>
          <Row>
          <Button onClick={changeCardContent} variant="primary" className='card-button w-50 mx-auto'>{buttontxt}</Button>
          </Row>
          <Card.Text className='text-white text-center'>
            {bottomText}
          </Card.Text>
        </Card.Body>
      </Card>
     
    </>
  );
};

export default Home;
