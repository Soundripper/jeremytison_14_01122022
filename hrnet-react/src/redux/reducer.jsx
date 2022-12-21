import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "employee",
  initialState: 
    {
        users: [],
        firstName: "",
        lastName: "",
        birthDate: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: ""
    }
  ,
  reducers: {
    saveUserReducer: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.startDate = action.payload.startDate;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;
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