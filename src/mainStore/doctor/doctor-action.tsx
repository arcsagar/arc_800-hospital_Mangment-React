import { saveAppointment } from "./doctor-store";

export const getAllDoctorAppointment = (userId: any) => {
    return async (dispatch: any) => {

        const bodyJson = JSON.stringify({userId});
        const getAllDoctorsBookAppointmentApi:any = await fetch('http://localhost:3001/doctors/bookedAppointment',{
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: bodyJson
           }).catch((err) => {
                   console.log('server err',err)
           });  
    
           const {doctorsEvents} = await getAllDoctorsBookAppointmentApi.json();
           console.log('doctorsEvents',doctorsEvents)
           dispatch(saveAppointment({appointments: doctorsEvents}))
    }
};

