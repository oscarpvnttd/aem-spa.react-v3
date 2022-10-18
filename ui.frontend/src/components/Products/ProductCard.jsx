import { Link, NavLink } from 'react-router-dom';
import React from 'react';

require('./Product.css');

export const ProductCard = ({ id, precio, name, jname }) => {

  const image = require(`../../data/images/${id}.jpg`);

  return (
    <div className="thumbnail-container">
      <NavLink to="/" style={{all: "unset", cursor: "pointer"}}>
        <img className="imgcard" src={image.default} alt={id} />
        <h3 className='prname'>
          <b>{`${JSON.stringify(name).toUpperCase().replaceAll('"', '')} ${jname}`}</b>
        </h3>
        <span className='price'>{precio}€</span>
        <button className="mas">VER MÁS</button>
      </NavLink>
    </div>
  )
}


//------------------------------------------------------------------