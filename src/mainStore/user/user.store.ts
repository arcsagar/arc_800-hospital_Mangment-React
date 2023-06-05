import { createSlice } from '@reduxjs/toolkit';

const userStore = createSlice({
    name: 'userStore',
    initialState: {
        userData: {},
        events: []
    },
    reducers: {
        saveUser: (state, action) => {
            console.log('action',action)
            state.userData = action.payload.userData
        },
        events: (state,action) => {
            state.events = action.payload.events
        }
    }
});

export const { saveUser, events } = userStore.actions;
export default userStore;