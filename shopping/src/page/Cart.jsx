import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { /*changeName,*/ addCount } from '../store';


const Cart = () => {
  let state = useSelector((state) => {return state});
  console.log(state.cart)  //카드에 들어있는 요소 확인
  console.log(state.cart[0].name)  //카트의 0번째 요소 이름확인

  let dispatch = useDispatch();


  return (
    <div className='cartTable'>
      {state.user}의 장바구니 {/* store.js에 있는 user의 정보를 가져옴 */}
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i) =>
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td><button onClick={() => {dispatch(addCount(state.cart[i].id))}}>+</button></td>  {/* store.js에 있는 함수를 통해 버튼을 클릭할때 마다 카운트 되어 1씩 증가함 */}
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Cart;