import { createSlice } from "@reduxjs/toolkit";
import { sendRequestFriend, registerUser, loginUser, acceptRequestFriend, logout } from "./authActions";


//Implementar localstorage en el initial state

const initialStateOnLocalStorage = JSON.parse(window.localStorage.getItem('userInfo'))



const initialState = {
  loading: false,
  userInfo: initialStateOnLocalStorage || null,
  userSessionId: null,
  error: null,
  successRegister: false,
  successLogin: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.successRegister = true
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.successLogin = true
      state.userInfo = payload
      window.localStorage.setItem('userInfo', JSON.stringify(payload))
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false
      state.error = action
    },
    [sendRequestFriend.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [sendRequestFriend.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.successLogin = true
    },
    [sendRequestFriend.rejected]: (state, action) => {
      state.loading = false
      state.error = action
    },
    [acceptRequestFriend.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [acceptRequestFriend.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.successLogin = true
      console.log(payload)
      state.userInfo.conversations.push(payload.conversation)
    },
    [acceptRequestFriend.rejected]: (state, action) => {
      state.loading = false
      state.error = action
    },
    [logout.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = null
      state.successLogin = false
      state.userSessionId = false
      state.successRegister = false
      window.localStorage.removeItem('userInfo')
    },
    [logout.rejected]: (state, action) => {
      state.loading = false
      state.error = action
    },
    
  }
})

export default authSlice.reducer