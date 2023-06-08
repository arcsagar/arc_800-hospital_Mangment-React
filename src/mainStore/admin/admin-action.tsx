import { savedoctors, savepatients } from "./admin-store";

export const getAllDoctors = () => {
    return async (dispatch: any) => {

        const allDoctorsAPi = await fetch('http://localhost:3001/admin/doctors');
        const {doctors } = await allDoctorsAPi.json();

        dispatch(savedoctors({doctors}))
    }
}

export const getAllPatients= () => {
    return async (dispatch: any) => {

        const allDoctorsAPi = await fetch('http://localhost:3001/admin/users');
        const {patients} = await allDoctorsAPi.json();
        console.log('userData',patients)
        dispatch(savepatients({patients}))
    }
}