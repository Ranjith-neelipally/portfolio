import {
  Card,
  Typography,
  ContentWrapper,
  Heading,
  Badge,
} from "my-material-theme-ui-components";
import { getPortfolio } from "../../data";
import { Link } from "react-router-dom";

function Projects() {
  const portfolio = getPortfolio("ranjith");
  if (!portfolio) {
    console.error("Portfolio not found");
    return <div>Portfolio not found</div>;
  }
  return (
    <ContentWrapper $overflow="unset" $gap="20px">
      <header>
        <Typography variant="caption" colorType="secondary">
          Projects
        </Typography>
        <Heading level={2} fontWeight="bold">
          Selected work
        </Heading>
        <Typography variant="body" colorType="secondary">
          From internal tools to shipping mobile apps — click any project for
          the full case study.
        </Typography>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {portfolio.projects.map((p) => (
          <Link
            key={p.id}
            to={`/project/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card $padding="0" $borderRadius="12px">
              <div
                style={{
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  borderRadius: "12px 12px 0 0",
                  background: "#F3F4F6",
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 20, display: "grid", gap: 8 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Typography variant="caption" colorType="secondary">
                    {p.tagline}
                  </Typography>
                  <Typography variant="caption" colorType="secondary">
                    {p.year}
                  </Typography>
                </div>
                <Typography variant="h5" fontWeight="semibold">
                  {p.name}
                </Typography>
                <Typography variant="body" colorType="secondary">
                  {p.description}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    marginTop: 8,
                  }}
                >
                  {p.stack.map((t) => (
                    <Badge key={t} variant="subtle" colorType="info">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}

export default Projects;
