import { PrimaryButton } from "../CommonComponents/CommonStyles/styles";
import { ProjectContainer } from "./styles";
import { GetAllProjects } from "../../Store/Action/Projects";
import { useAppSelector } from "../../Store/Provider";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ProjectsPayload,
  Projects as ProjectState,
} from "../../Store/Types/Projects";
import Card from "../CommonComponents/Card";

function Projects() {
  const [projectsData, setprojectsData] = useState<ProjectsPayload>();
  const [parentWidth, setparentWidth] = useState<number>(0);
  const projects: ProjectsPayload = useAppSelector((state) => state.Projects);
  GetAllProjects();
  useEffect(() => {
    if (projects.data) {
      setprojectsData(projects);
    }
  }, [projects]);

  const parentRef = useRef<HTMLDivElement>(null);

  const getParentWidth = () => {
    if (parentRef.current) {
      setparentWidth(parentRef.current.offsetWidth);
    }
    return 0;
  };

  useEffect(() => {
    getParentWidth();
    window.addEventListener("resize", getParentWidth);
    return () => {
      window.removeEventListener("resize", getParentWidth);
    };
  });

  return (
    <ProjectContainer>
      <section className="header-wrapper">
        <h1 className="">Building Digital Wonders</h1>
        <h1>Occasionally Breaking Them</h1>
      </section>
      <section className="toolbar">
        <div>
          <PrimaryButton>All</PrimaryButton>
          <PrimaryButton>Professional</PrimaryButton>
          <PrimaryButton>Freelancing</PrimaryButton>
        </div>
      </section>
      <section className="content" ref={parentRef}>
        {projectsData?.loading ? (
          "loading..."
        ) : projectsData?.error ? (
          <div>{projectsData.error}</div>
        ) : (
          projectsData?.data?.map((project: ProjectState, index) => (
            <div style={{display:'flex'}} key={index}>
              <Card
                title={project.projectName}
                description={project.description}
                previewImage={project.projectPreview}
              />
            </div>
          ))
        )}
      </section>
    </ProjectContainer>
  );
}

export default Projects;
