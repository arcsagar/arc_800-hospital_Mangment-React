import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctorAppointment } from "../../../mainStore/doctor/doctor-action";

const DoctorAppointment = () => {

    const dispatch: any = useDispatch();
    const { userData } = useSelector((state: any) => state.user);

    const { appointments} = useSelector((state: any) =>  state.doctor);

    console.log('appointments',appointments)
    useEffect(() => {
        dispatch(getAllDoctorAppointment(userData.id))
    },[])
    return (
        <div>
            DoctorAppointment
        </div>
    )
};

export default DoctorAppointment;