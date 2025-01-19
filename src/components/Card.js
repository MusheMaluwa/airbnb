import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ src, title, description, price }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the Listing component route
    navigate('/listing');
  };
  
  return (
    <div className="card"  onClick={handleCardClick}>
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
