import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//store -> root reducer(state) -> user slice, order slice
//ex> state.user.email, state.order

//action : state를 바꾸는 동작/행위
//dispatch : 그 action을 실제로 실행하는 함수
//reducer : action이 실제로 실행되면 state를 바꾸는 로직

const initialState = {
  money: 0,
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMoney(state, action : PayloadAction<number>) {
      state.money = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    }
  },
  extraReducers: builder => {},
});

export default userSlice;