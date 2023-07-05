import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
/*
  --when i send reqest.. ther there evet happen

  1/ start reqest 
  2/ success
  3/ eroor
  --- and i will create there action to there event
*/
export const addUser = createAsyncThunk('users/add', async (user) => {
  const res = await axios.post('http://localhost:5000/api/users', user)
  return res.data
})
export const userSlice = createSlice({
  // i create a slice to take action and state in the same place
  name: 'user',
  initialState: {
    userData: {
      name: '',
      email: '',
    },
    loading: false,
    seccess: null,
    error: false,
  },
  // this action
  reducers: {
    // addUser: (state, action) => {
    //   state.name = action.payload.name
    //   state.email = action.payload.email
    // },
    // // -- 1/ when event start
    // startUser: (state) => {
    //   state.loading = true
    // },
    // // when event seccess
    // seccessUser: (state, action) => {
    //   //-- 2/ when the data recive to my i put it in useData
    //   state.userData = action.payload
    //   // if data already back to my this means loading = false
    //   state.loading = false
    // },
    // //-- 3/ when fonud error
    // errorUser: (state) => {
    //   state.loading = false
    //   state.error = true
    // },
    // new method use reduc thunk
  },
  extraReducers: {
    // when start
    [addUser.pending]: (state) => {
      state.loading = true
    },
  },
  // when event seccess
  [addUser.fulfilled]: (state, action) => {
    state.userData = action.payload
    state.loading = false
  },
  // when fonud error

  [addUser.rejected]: (state) => {
    state.loading = false
    state.error = true
  },
})
export const { startUser, seccessUser, errorUser } = userSlice.actions

export default userSlice.reducer
