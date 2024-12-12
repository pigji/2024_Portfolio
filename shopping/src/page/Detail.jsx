import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../Shopping';

const Detail = (props) => {
  let {id} = useParams();
  const {shopping} = useContext(DataContext);
  return (
    <div className='detail'>
      <div className='col'>
      <img src={process.env.PUBLIC_URL + shopping[id].img} alt={shopping[id].title} />
      </div>
      <div className='row'>
        <h4 className='mt20'>{shopping[id].title}</h4>
        <p>{shopping[id].description}</p>
        <p>가격 : {shopping[id].price}</p>
        <button className='btn'>주문하기</button>
      </div>
    </div>
  )
}

export default Detail;