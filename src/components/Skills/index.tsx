import { GetAllSkills } from "../../Store/Action/Skills";
import { useAppSelector } from "../../Store/Provider";
import { SkillsContainer, SkillsWrapper, ContainerStyles } from "./styles";

export interface SkillsProps {
  $transformString?: string;
  $left?: string;
  $bottom?: string;
  $zindex?: string;
}

function Skills() {
  GetAllSkills();
  const Skills = useAppSelector((state) => state.Skills.data);
  console.log(Skills, "Skills");
  return (
    <SkillsContainer>
      <h1 className="heading-text">You'll catch me doing a combo of these:</h1>
      <ContainerStyles>
        <SkillsWrapper>
          <div className="header">Frameworks</div>
          <ul className="body">
            {Skills?.frameWorks?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </SkillsWrapper>

        <SkillsWrapper>
          <div className="header">Skills</div>
          <ul className="body">
            {Skills?.skills?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </SkillsWrapper>

        <SkillsWrapper>
          <div className="header">Tools</div>
          <ul className="body">
            {Skills?.tools?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </SkillsWrapper>
      </ContainerStyles>
    </SkillsContainer>
  );
}

export default Skills;
