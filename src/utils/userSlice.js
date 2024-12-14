import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : "user",
  initialState : {
    fullname: '',
    email: '',
    isLoggedIn: false,
  },
  reducers : {
    addUser : (state, action)=>{
      const {fullname, email} = action.payload;
      state.fullname = fullname;
      state.email = email;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.fullname = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  }
})

export const {addUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;