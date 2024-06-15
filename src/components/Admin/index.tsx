// import { styled } from "@mui/material/styles";
import { FormEvent, useState } from "react";
import { ImageToBase64 } from "../../utils/base64Converter";
import { AdminFormFields } from "../../Types/AdminForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENTNEW, INCREMENTNEW, RESETNEW } from "../../store/index";
import { useContextCounter } from "../../store/context";
export default function Admin() {
  const [formDetails, setformDetails] = useState<AdminFormFields>();

  // useEffect(() => {
  //   fetchAdminDetailsre(dispatch);

  // }, [dispatch]);

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

  // const handleButtonClick = () => {
  //   if (formDetails) {
  //     postAdminDetails(formDetails);
  //     dispatch(
  //       updateAdminState({
  //         data: {
  //           adminName: formDetails?.name,
  //           profilePhoto: formDetails?.profilePhoto,
  //         },
  //         error: "",
  //       })
  //     );
  //   } else {
  //     console.error("Form details are undefined");
  //   }
  // };

  const basicCount = useSelector((state: any) => state.basic.count);
  const newCount = useSelector((state: any) => state.new.count);
  const dispatch = useDispatch();
  const { state, counterdispatch } = useContextCounter();
  return (
    <div>
      <>
        <>
          <Link to="/work">To Admin</Link>
          {/* {data?.adminName ? data?.adminName : <>Loading</>} */}
          <div>
            form redux
            <div>
              <div>
                {/* admin name :
                {selector.loading === true
                  ? "loading"
                  : selector.data?.adminName} */}
              </div>
              admin pic:
              {/* <img
                style={{ height: "50px", width: "50px" }}
                src={
                  selector.loading === true
                    ? "loading"
                    : selector.data?.profilePhoto
                }
                alt="profile"
              /> */}
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
        {/* <button onClick={handleButtonClick}>sumbit</button> */}
        <div>Reducer{basicCount}</div>
        <>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            decrement
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            decrement
          </button>
          <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        </>
        <div>
          <div>Slice:{newCount}</div>
          <button onClick={() => dispatch(INCREMENTNEW())}>increment</button>
          <button onClick={() => dispatch(DECREMENTNEW())}>decrement</button>
          <button onClick={() => dispatch(RESETNEW())}>Reset</button>
        </div>
        <div>
          <div>
            <div>Context{state.count}</div>
          </div>
          <button onClick={() => counterdispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <button onClick={() => counterdispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
          <button onClick={() => counterdispatch({ type: "RESET" })}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
