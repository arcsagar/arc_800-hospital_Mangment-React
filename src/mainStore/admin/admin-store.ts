import { createSlice } from "@reduxjs/toolkit";

const adminStore = createSlice({
    name: 'adminStore',
    initialState: {
        doctors: [],
        patients: []
    },
    reducers: {
        savedoctors: (state,action) => {
            state.doctors = action.payload.doctors;
        },
        savepatients: (state,action) => {
            state.patients = action.payload.patients;
        }
    }
});

export const { savedoctors,  savepatients} = adminStore.actions;
export default adminStore;