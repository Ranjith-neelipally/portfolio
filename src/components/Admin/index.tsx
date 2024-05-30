// import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { AdminContext } from "../../Store/Provider/AdminProvider";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

export default function Admin() {
  const adminname = useContext(AdminContext);
  const data = adminname?.state.data

  // const UploadFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement;
  //   if (target.files && target.files.length > 0) {
  //     const file = target.files[0];
  //     console.log(file);
  //   }
  // };

  return (
    <div>
      <>
        <>
          {data?.adminName ? (
            data?.adminName
          ) : (
            <>Loading</>
          )}
        </>
      </>
    </div>
  );
}
