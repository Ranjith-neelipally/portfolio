import { GetAllSkills } from "../../Store/Action/Skills";
import { useAppSelector } from "../../Store/Provider";
import {
  RootElement,
  Grid,
  Typography,
  List,
  ListItem,
} from "my-material-theme-ui-components";

const Root = RootElement as any;

function Skills() {
  GetAllSkills();
  const SkillsData = useAppSelector((state) => state.Skills.data);

  return (
    <Root 
      $padding="40px 24px" 
      $backgroundColor="transparent"
      style={{ maxWidth: "1000px", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "32px", textAlign: "left" }}
    >
      <Typography variant="h1" fontWeight="bold" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#1a202c", margin: 0 }}>
        You'll catch me doing a combo of these:
      </Typography>

      <Grid columns={3} gap="24px">
        {/* Frameworks Card */}
        <Root
          $backgroundColor="#ffffff"
          $padding="28px"
          style={{ 
            borderRadius: "20px", 
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <Typography variant="h3" fontWeight="bold" style={{ fontSize: "20px", color: "#2b59db", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", margin: 0 }}>
            Frameworks
          </Typography>
          <List>
            {SkillsData?.frameWorks?.map((item, index) => (
              <ListItem key={index}>
                <Typography variant="body" style={{ color: "#4a5568", fontSize: "15px" }}>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Root>

        {/* Skills Card */}
        <Root
          $backgroundColor="#ffffff"
          $padding="28px"
          style={{ 
            borderRadius: "20px", 
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <Typography variant="h3" fontWeight="bold" style={{ fontSize: "20px", color: "#2b59db", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", margin: 0 }}>
            Skills
          </Typography>
          <List>
            {SkillsData?.skills?.map((item, index) => (
              <ListItem key={index}>
                <Typography variant="body" style={{ color: "#4a5568", fontSize: "15px" }}>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Root>

        {/* Tools Card */}
        <Root
          $backgroundColor="#ffffff"
          $padding="28px"
          style={{ 
            borderRadius: "20px", 
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <Typography variant="h3" fontWeight="bold" style={{ fontSize: "20px", color: "#2b59db", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", margin: 0 }}>
            Tools
          </Typography>
          <List>
            {SkillsData?.tools?.map((item, index) => (
              <ListItem key={index}>
                <Typography variant="body" style={{ color: "#4a5568", fontSize: "15px" }}>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Root>
      </Grid>
    </Root>
  );
}

export default Skills;
