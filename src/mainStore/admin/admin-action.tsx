
export const getAllDoctors = () => {
    return async (dispatch: any) => {

        const allDoctorsAPi = await fetch('http://localhost:3001/admin/doctors');
        const allDoctorResp = await allDoctorsAPi.json();

        console.log('allDoctorResp',allDoctorResp)
    }
}