import React from 'react';

const Card = (props) => {
  return (
    <div className="col">
        <img  src={process.env.PUBLIC_URL + '/img/shopping'+props.i+'.gif'} alt="shopping1Img" />
        <p className="mt20 price">{props.shopping.price}</p>
        <h4 className="s-title">{props.shopping.title}</h4>
        <hr />
        <p className="category">{props.shopping.category}</p>
    </div>
  );
};

export default Card;