// import { styled } from "@mui/material/styles";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/ReduxStore";
import {
  fetchAdminDetails,
  postAdminDetails,
} from "../../Store/Action/AdminAction";
import { ImageToBase64 } from "../../utils/base64Converter";
import { AdminFormFields } from "../../Types/AdminForm";
import { updateAdminState } from "../../Store/slice/Admin";
import { Link } from "react-router-dom";
export default function Admin() {
  const [formDetails, setformDetails] = useState<AdminFormFields>();
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.admin);

  useEffect(() => {
    fetchAdminDetails(dispatch);
  }, [dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const file = formData.get("file") as File;
    const email = formData.get("email") as string;

    const base64 = await ImageToBase64(file);
    setformDetails((prevState) => ({
      ...prevState,
      name,
      profilePhoto: base64,
      email,
    }));
    console.log(formDetails, "details");
  };

  const handleButtonClick = () => {
    if (formDetails) {
      postAdminDetails(formDetails);
      dispatch(
        updateAdminState({
          data: {
            adminName: formDetails?.name,
            profilePhoto: formDetails?.profilePhoto,
          },
          error: "",
        })
      );
    } else {
      console.error("Form details are undefined");
    }
  };

  return (
    <div>
      <>
        <>
          <Link to="/work">To Admin</Link>
          <div>
            form redux
            <div>
              <div>
                admin name :
                {selector.loading === true
                  ? "loading"
                  : selector.data?.adminName}
              </div>
              admin pic:
              <img
                style={{ height: "50px", width: "50px" }}
                src={
                  selector.loading === true
                    ? "loading"
                    : selector.data?.profilePhoto
                }
                alt="profile"
              />
            </div>
          </div>

          <button>check me and lol</button>
        </>
      </>
      <>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="name" placeholder="name" />
          <input type="file" name="file" placeholder="choose" />
          <input type="text" name="email" placeholder="choose" />
          <button type="submit">submit</button>
        </form>
      </>

      <div>
        <h1>name</h1>: {formDetails?.name}
        <h1>file</h1>:{" "}
        {formDetails?.profilePhoto ? (
          <>{formDetails?.profilePhoto}</>
        ) : (
          <>no file found</>
        )}
        <div></div>
        <button onClick={handleButtonClick}>sumbit</button>
      </div>
    </div>
  );
}
