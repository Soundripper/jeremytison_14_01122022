import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "employee",
  initialState: 
    {
        users: [],
    }
  ,
  reducers: {
    saveUserReducer: (state:any, action:any) => {
      state.users.push(action.payload);
    },
    resetUsersData: (state:any, action:any) => {
      state.users = []
    }
  }
});

export const selectUser = (state:any) => state.employee;
export const { saveUserReducer, resetUsersData } = userSlice.actions;
export default userSlice.reducer;