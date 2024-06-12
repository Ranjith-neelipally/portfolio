import { useAppSelector, useAppDispatch } from "../../Store/ReduxStore";

function Projects() {
  const selector = useAppSelector((state) => state.admin);
  console.log(selector.data);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="name"></div>
      <div className="desc">
        <div>{selector.data?.adminName} form dedux</div>

        <>{selector.data?.profilePhoto}</>
      </div>
    </div>
  );
}

export default Projects;
