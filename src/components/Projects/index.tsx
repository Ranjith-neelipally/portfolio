import { useContext } from "react";
import { AdminContext } from "../../Store/Provider/AdminProvider";

function Projects() {
  const adminName = useContext(AdminContext);
  const data = adminName?.state.data
  return (
    <div>
      <div className="name">
      {data?.adminName}

      </div>
      <div className="desc">
      {data?.profilePhoto}

      </div>
    </div>
  );
}

export default Projects;
