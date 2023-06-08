import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors, getAllPatients } from "../../../mainStore/admin/admin-action";
import TableHealth from "../../../common/TableHealth";

const PatientList = () => {
  const dispatch: any = useDispatch();
  const { patients } = useSelector((state: any) => state.admin);

  useEffect(() => {
    dispatch(getAllPatients());
  }, []);

  console.log("patients from admin list", patients);
  const tHead: string[] = ["id","email", "name", "password", "type", 'extra'];
  const tableContent = <TableHealth tHead={tHead} tBody={patients} />;
  return <div>
    <p>PatientList</p>
    {tableContent}
  </div>;
};

export default PatientList;
