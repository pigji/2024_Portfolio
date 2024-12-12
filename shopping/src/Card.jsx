import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link to={`./detail/${props.shopping.id}`} className="col">
        <img  src={process.env.PUBLIC_URL + '/img/shopping'+props.i+'.gif'} alt="shopping1Img" />
        <p className="mt20 price">{props.shopping.price}</p>
        <h4 className="s-title">{props.shopping.title}</h4>
        <hr />
        <p className="category">{props.shopping.category}</p>
    </Link>
  );
};

export default Card;