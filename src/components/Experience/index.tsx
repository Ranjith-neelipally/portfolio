import { getPortfolio } from "../../data";
import {
  Typography,
  ContentWrapper,
  Badge,
  Card,
  Divider,
  Heading,
} from "my-material-theme-ui-components";

function Experience() {
  const portfolio = getPortfolio("ranjith");
  if (!portfolio) {
    console.error("Portfolio not found");
    return <div>Portfolio not found</div>;
  }
  return (
    <>
      <ContentWrapper $overflow="unset" $gap="20px">
        <header>
          <Typography variant="caption" colorType="secondary">
            Experience
          </Typography>
          <Heading level={2} fontWeight="bold">
            Work experience
          </Heading>
          <Typography variant="body" colorType="secondary">
            A timeline of roles, companies, and the work shipped.
          </Typography>
        </header>
        <>
          {portfolio.experience.map((e) => (
            <Card key={e.id} $padding="28px" $borderRadius="12px">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div>
                  <Heading level={4} fontWeight="semibold">
                    {e.role}
                  </Heading>
                  <Typography
                    variant="body"
                    fontWeight="medium"
                    colorType="brand"
                  >
                    {e.company}
                  </Typography>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Typography variant="caption" colorType="secondary">
                    {e.period}
                  </Typography>
                  <Typography variant="caption" colorType="secondary">
                    {e.location}
                  </Typography>
                </div>
              </div>
              <Divider margin="20px 0" />
              <Typography variant="body">{e.summary}</Typography>
              <ul
                style={{
                  marginTop: 16,
                  paddingLeft: 20,
                  display: "grid",
                  gap: 6,
                }}
              >
                {e.highlights.map((h, i) => (
                  <li key={i} style={{ color: "#374151" }}>
                    {h}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 16,
                }}
              >
                {e.stack.map((s) => (
                  <Badge key={s} variant="subtle" colorType="info">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </>
      </ContentWrapper>
    </>
  );
}

export default Experience;
