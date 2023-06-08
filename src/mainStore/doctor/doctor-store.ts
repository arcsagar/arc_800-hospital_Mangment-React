import { createSlice } from "@reduxjs/toolkit";

const doctorStore = createSlice({
    name: 'doctorStore',
    initialState: {
        appointments: []
    },
    reducers: {
        saveAppointment: (state,action) => {
            state.appointments = action.payload.appointments
        }
    }
});

export const {saveAppointment } = doctorStore.actions;

export default doctorStore;