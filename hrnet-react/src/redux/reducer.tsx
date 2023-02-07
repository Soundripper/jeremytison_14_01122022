import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserSaveI {
  firstName: string,
  lastName: string,
  startDate: string,
  department: string,
  dateOfBirth: string,
  street: string,
  city: string,
  state: string,
  zipCode: string,
}

export interface ReducerI {
  saveUserReducer: UserStateI
}

export interface UserStateI {
  users: UserSaveI[]
}
const initialState : UserStateI = {
  users: []
}
const userSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    saveUserReducer: (state, action: PayloadAction<UserSaveI>) => {
      state.users.push(action.payload);
    },
    resetUsersData: (state:any) => {
      state.users = []
    }
  }
});

export const selectUser = (state:any) => state.employee;
export const { saveUserReducer, resetUsersData } = userSlice.actions;
export default userSlice.reducer;