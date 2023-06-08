import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../../mainStore/admin/admin-action";
import TableHealth from "../../../common/TableHealth";

const DoctorList = () => {
  const dispatch: any = useDispatch();
  const { doctors } = useSelector((state: any) => state.admin);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, []);

  console.log("doctors from admin list", doctors);
  const tHead: string[] = ["id","email", "name", "password", "type", 'extra'];
  const tableContent = <TableHealth tHead={tHead} tBody={doctors} />;
  return <div>
    <p>DoctorList</p>
    {tableContent}
  </div>;
};

export default DoctorList;
