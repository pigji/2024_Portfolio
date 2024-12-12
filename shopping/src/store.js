import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'jee'
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id: 0, name: '멜로우 진주버튼 배색 뽀글이퍼 겨울 자켓', count: 2},
    {id: 1, name: '베이직면 모달 하프넥 속기모 티셔츠', count: 1}
  ]
})

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})