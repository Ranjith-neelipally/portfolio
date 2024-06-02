import { useContext, useEffect } from "react";
import { AdminContext } from "../../Store/Provider/AdminProvider";
import { useAppSelector,useAppDispatch } from "../../Store/ReduxStore";
import { fetchAdminDetailsre } from "../../Store/Action/AdminAction";
import { Link } from "react-router-dom";

function Projects() {
  const adminName = useContext(AdminContext);
  const data = adminName?.state.data
  const selector = useAppSelector(state => state.admin)
  console.log(selector.data)
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <div className="name">
      {data?.adminName}

      </div>
      <div className="desc">
      {data?.profilePhoto}
      <div>{selector.data?.adminName} form dedux</div>

      <>{selector.data?.profilePhoto}</>

      </div>
    </div>
  );
}

export default Projects;
