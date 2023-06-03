import { configureStore } from '@reduxjs/toolkit';
import userStore from './user/user.store';
import calendarStore from './calendar/calendar-store';


const mainStore = configureStore({
    reducer: {
        user: userStore.reducer,
        calendar: calendarStore.reducer
    }
});

export default mainStore;