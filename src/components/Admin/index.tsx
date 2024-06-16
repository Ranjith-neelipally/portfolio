import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../../Store/Provider";
import { useRef } from "react";
import { addDate } from "../../Store/Slice/Admin";
import { getEnvVariable } from "../../utils/helpers";
import { GetAdminData } from "../../Store/Action/Admin";
import { AdminPayload as AdminTypes } from "../../Store/Types/Admin";

export default function Admin() {
  const anitherData = useAppSelector((state) => state.Admin);
  const AdminDate: AdminTypes = useSelector((state: any) => state.Admin);
  const ProjectData = useAppSelector((state) => state.Projects);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      dispatch(
        addDate({
          data: {
            name: inputRef.current.value,
          },
        })
      );
    }
  };

  const baseURL = getEnvVariable("VITE_REACT_APP_BASE_URL");

  GetAdminData("email@email.cm");
  console.log(AdminDate, "AdminDate");

  return (
    <div>
      index
      <div>
        name:
        {AdminDate.loading === true ? (
          <>loading</>
        ) : (
          <>{AdminDate.data?.name}</>
        )}
      </div>
      <div>email{AdminDate.data?.email}</div>
      <div>Error:{AdminDate.error && <div>{AdminDate.error}</div>}</div>
      <div className="d-flex card flex-column gap-3">
        <label htmlFor="text">Name</label>
        <input type="text" className="form-control" ref={inputRef} />
        <button className="btn btn-dark" onClick={handleClick}>
          Add Data
        </button>
      </div>
      <div>
        base URL: <span className="bg-danger border">{baseURL}</span>
      </div>
      <div>
        projects:
        {ProjectData.data &&
          ProjectData.data.projects.map((items, index) => (
            <div key={index}>
              <header>{index + 1}</header>
              <div>name:{items.name}</div>
              <div>description:{items.description}</div>
              <div>image:{items.image}</div>
              <div>url:{items.url}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
