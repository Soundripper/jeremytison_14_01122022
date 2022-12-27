import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "employee",
  initialState: 
    {
        users: [],
    }
  ,
  reducers: {
    saveUserReducer: (state, action) => {
      state.users.push(action.payload);
    },
    resetUsersData: (state, action) => {
      state.users = []
    }
  }
});

export const selectUser = (state) => state.employee;
export const { saveUserReducer, resetUsersData } = userSlice.actions;
export default userSlice.reducer;