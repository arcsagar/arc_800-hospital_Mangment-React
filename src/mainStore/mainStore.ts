import { configureStore } from '@reduxjs/toolkit';
import userStore from './user/user.store';
import calendarStore from './calendar/calendar-store';
import adminStore from './admin/admin-store';
import doctorStore from './doctor/doctor-store';


const mainStore = configureStore({
    reducer: {
        user: userStore.reducer,
        calendar: calendarStore.reducer,
        admin: adminStore.reducer,
        doctor : doctorStore.reducer
    }
});

export default mainStore;