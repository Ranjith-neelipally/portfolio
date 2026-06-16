import {
  Button,
  Card,
  Typography,
  ContentWrapper,
  Heading,
  Badge,
  Divider,
  FlexRow,
} from "my-material-theme-ui-components";
import { getPortfolio } from "../../data";
import { Link, useParams } from "react-router-dom";

function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const portfolio = getPortfolio("ranjith");
  if (!portfolio) {
    console.error("Portfolio not found");
    return <div>Portfolio not found</div>;
  }
  const project = portfolio.projects.find((p) => p.id === projectId);
  if (!project) throw new Error("Project not found");
  return (
    <ContentWrapper $overflow="unset" $gap="20px">
      <div style={{ display: "grid", gap: 24 }}>
        <Link
          to="/Projects"
          style={{ color: "#6B7280", textDecoration: "none", fontSize: 14 }}
        >
          ← All projects
        </Link>

        <header>
          <Typography variant="caption" colorType="secondary">
            {project.tagline} · {project.year}
          </Typography>
          <Heading level={1} fontWeight="bold">
            {project.name}
          </Heading>
          <Typography variant="body" colorType="secondary">
            {project.description}
          </Typography>
        </header>

        <div
          style={{
            aspectRatio: "16 / 9",
            borderRadius: 16,
            overflow: "hidden",
            background: "#F3F4F6",
          }}
        >
          <img
            src={project.image}
            alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        </div>

        <FlexRow>
          <Card $padding="32px" $borderRadius="12px">
            <Heading level={5} fontWeight="semibold">
              Overview
            </Heading>
            <Typography variant="body">{project.longDescription}</Typography>
            <Divider margin="24px 0" />
            <Heading level={6} fontWeight="semibold">
              Key features
            </Heading>
            <ul
              style={{
                paddingLeft: 20,
                marginTop: 12,
                display: "grid",
                gap: 6,
              }}
            >
              {project.features.map((f) => (
                <li key={f} style={{ color: "#374151" }}>
                  {f}
                </li>
              ))}
            </ul>
          </Card>

          <Card $padding="24px" $borderRadius="12px">
            <Heading level={6} fontWeight="semibold">
              Details
            </Heading>
            <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
              <Fact label="Role" value={project.role} />
              <Fact label="Year" value={project.year} />
              <div>
                <Typography variant="caption" colorType="secondary">
                  Stack
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: 6,
                  }}
                >
                  {project.stack.map((s) => (
                    <Badge key={s} variant="outlined" colorType="primary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <Divider margin="20px 0" />
            <div style={{ display: "grid", gap: 8 }}>
              {project.links.demo && (
                <a href={project.links.demo} style={{ textDecoration: "none" }}>
                  <Button
                    $backgroundColor={portfolio.primaryColor}
                    $fontColor="#fff"
                    $padding="10px 16px"
                    $borderRadius="8px"
                  >
                    Live demo →
                  </Button>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    $backgroundColor="#fff"
                    $fontColor="#111827"
                    $border="1px solid #E5E7EB"
                    $padding="10px 16px"
                    $borderRadius="8px"
                  >
                    GitHub
                  </Button>
                </a>
              )}
              {project.links.caseStudy && (
                <a
                  href={project.links.caseStudy}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    $backgroundColor="#fff"
                    $fontColor="#111827"
                    $border="1px solid #E5E7EB"
                    $padding="10px 16px"
                    $borderRadius="8px"
                  >
                    Case study
                  </Button>
                </a>
              )}
            </div>
          </Card>
        </FlexRow>
      </div>
    </ContentWrapper>
  );
}

export default ProjectDetailPage;
function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <Typography variant="caption" colorType="secondary">
        {label}
      </Typography>
      <Typography variant="body" fontWeight="medium">
        {value}
      </Typography>
    </div>
  );
}
