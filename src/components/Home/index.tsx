import {
  Badge,
  Button,
  Card,
  Divider,
  HeaderPanel,
  Heading,
  Paragraph,
  Typography,
  FlexRow,
  ContentWrapper,
} from "my-material-theme-ui-components";
import { GetAllProjects } from "../../Store/Action/Projects";
import { getPortfolio } from "../../data/index";
import { Link } from "react-router-dom";

function Home() {
  // Fetch projects into redux store
  GetAllProjects();
  const portfolio = getPortfolio("ranjith");
  if (!portfolio) {
    console.error("Portfolio not found");
    return <div>Portfolio not found</div>;
  }
  const featured = portfolio.projects.slice(0, 3);
  return (
    <>
      <ContentWrapper $overflow="unset" $gap="20px">
        <HeaderPanel $gap={12}>
          <Paragraph>Available for new opportunities</Paragraph>
          <div>
            <Heading level={1} fontWeight="bold">
              {portfolio.name}
            </Heading>
            <Typography variant="h4" colorType="secondary" fontWeight="medium">
              {portfolio.title}
            </Typography>
          </div>
          <Typography variant="body">{portfolio.tagline}</Typography>
          <FlexRow>
            <Link to="/Projects" style={{ textDecoration: "none" }}>
              <Button
                $backgroundColor="transparent"
                $border={`1.5px solid ${portfolio.primaryColor}`}
              >
                View projects
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button>Get in touch</Button>
            </Link>
          </FlexRow>
        </HeaderPanel>

        <FlexRow className="flex-nowrap">
          {portfolio.stats.map((s) => (
            <Card>
              <Typography variant="h3" fontWeight="bold">
                {s.value}
              </Typography>
              <Typography variant="caption" colorType="secondary">
                {s.label}
              </Typography>
            </Card>
          ))}
        </FlexRow>

        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 16,
            }}
          >
            <Heading level={3} fontWeight="semibold">
              Featured work
            </Heading>
            <Link
              to="/Projects"
              style={{
                color: portfolio.primaryColor,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              View all →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {featured.map((p) => (
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                  </div>
                  <div style={{ padding: 20, display: "grid", gap: 8 }}>
                    <Typography variant="caption" colorType="secondary">
                      {p.tagline}
                    </Typography>
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
                      {p.stack.slice(0, 3).map((t) => (
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
        </section>

        <Divider />

        <Card>
          <div>
            <Typography variant="h5" fontWeight="semibold">
              Want to work together?
            </Typography>
            <Typography variant="body" colorType="secondary">
              Open to full-time, contract, and collaboration opportunities.
            </Typography>
          </div>
          <Link to="/$username/contact" style={{ textDecoration: "none" }}>
            <Button
              $backgroundColor={portfolio.primaryColor}
              $fontColor="#fff"
              $padding="10px 20px"
              $borderRadius="8px"
            >
              Contact {portfolio.name.split(" ")[0]}
            </Button>
          </Link>
        </Card>
      </ContentWrapper>
    </>
  );
}

export default Home;
