import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contact from './ContactCard';
import HomeCard from './HomeCard';

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
  };

  return (
    <>
      <Card className='transparent-bg homecard'>
        <Card.Body className='p-2'>
          <Card.Title><h1 className='text-white heading text-center title'>{heading}</h1></Card.Title>
          <Card.Text className='text-center homecontent pt-4 text-white'>
            {content}
          </Card.Text>
          <Button onClick={changeCardContent} variant="primary" className='card-button'>{buttontxt}</Button>
          <Card.Text className='text-white text-center'>
            {bottomText}
          </Card.Text>
        </Card.Body>
      </Card>
      <h5 className='text-white nano'>Nano 300 Watts</h5>
    </>
  );
};

export default Home;
