import React from 'react';
import './Card.scss';
import { ThemeContext } from '../ThemeContext'

export const Card = (props) => {
  const { toggle } = React.useContext(ThemeContext);
  const { title, url, description } = props;
  let nombre = toggle ? "card text-white bg-dark" : "card bg-light";
  
  return (
    <div className={nombre} style={{ width: '18rem' }}>
      <img src={url} className='card-img-top' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href='#' className='btn btn-primary'>Go somewhere</a>
      </div>
    </div>
  );
};
