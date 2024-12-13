import { configureStore, createSlice } from '@reduxjs/toolkit';

//수정해주는 함수 생성
let user = createSlice({  //생성
  name: 'user',
  initialState: 'jee hyun',
  reducers: { //state을 수정해주는 함수
    changeName(state){
      return 'cho' + state  //버튼누르면 cho jee hyun으로 나옴
    }
  }
})
//동작 내보내기
export let {changeName} = user.actions

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id: 0, name: '멜로우 진주버튼 배색 뽀글이퍼 겨울 자켓', count: 2},
    {id: 1, name: '베이직면 모달 하프넥 속기모 티셔츠', count: 1}
  ],
  reducers: { //state을 수정해주는 함수
    addCount(state, action){
      state[action.payload].count++ //count 1씩 증가 
    }
  }
})
//내보내기
export let {addCount} = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})