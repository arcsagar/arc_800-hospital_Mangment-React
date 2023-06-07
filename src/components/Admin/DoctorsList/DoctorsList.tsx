import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDoctors } from "../../../mainStore/admin/admin-action";

const DoctorList = () => {

    const dispatch:any = useDispatch();


    useEffect(() => {
        console.log('useEffect from doctor list')
        dispatch(getAllDoctors())


    },[]);

    return (
        <div>
            DoctorList
        </div>
    )
};

export default DoctorList;