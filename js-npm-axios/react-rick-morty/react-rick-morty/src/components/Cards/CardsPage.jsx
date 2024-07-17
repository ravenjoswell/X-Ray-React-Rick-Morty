import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Cards.css";
import ReactCardFlip from "react-card-flip";
import Barcode from 'react-barcode';


const CardsPage = ({ character }) => {
  const { id, name, status, species, gender, location, image, origin, created} = character;
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  let badgeClass = '';
  switch (status) {
    case 'Alive':
      badgeClass = 'badge alive';
      break;
    case 'Dead':
      badgeClass = 'badge dead';
      break;
    default:
      badgeClass = 'badge unknown';
      break;
  }

  return (
    <div className="horizontal-card">
      <ReactCardFlip flipDirection="vertical" isFlipped={isCardFlipped}>
        <div className="card horizontal">
          <div className="image-container">
            <Card.Img className="horizontal-image" variant="top" src={image} />
          </div>
          <div className="horizontal-content">
            <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">
                    <Card.Text className="card-text">
                        <span className="card-text-before"></span> <span className="card-text-after"><span className={badgeClass}>{status}</span> - {species}</span>
                    </Card.Text>
                    <Card.Text className="card-text">
                        <span className="card-text-before">Gender:</span> <span className="card-text-after">{gender}</span>
                    </Card.Text>
                        <span className="card-text-before">Origin:</span> <span className="card-text-after">{origin.name}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="card-text-before">Last seen:</span> <span className="card-text-after">{location.name}</span>
                    </Card.Text>
            <Button className="front-button" variant="primary" onClick={handleCardFlip}>See Barcode</Button>
          </div>
        </div>
        <div className="card card-back horizontal">
          <Card.Body className="horizontal-content">
                    <Card.Text className="card-text-back">
                        <span className="card-text-before">ID NUMBER:</span> <span className="card-text-after">XRAY000{id}</span>
                    </Card.Text>
                    <Barcode className="barcode" background='' height="50" lineColor="teal" value={created} />
            <Button className="back-button" variant="secondary" onClick={handleCardFlip}>Go Back</Button>
          </Card.Body>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default CardsPage;