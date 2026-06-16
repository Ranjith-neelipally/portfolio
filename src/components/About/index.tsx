import { Link } from "react-router-dom";
import { getPortfolio } from "../../data";
import {
  Typography,
  ContentWrapper,
  Badge,
  Card,
  Divider,
  Heading,
} from "my-material-theme-ui-components";

function About() {
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
            About
          </Typography>
          <Heading level={2} fontWeight="bold">
            About {portfolio.name.split(" ")[0]}
          </Heading>
        </header>{" "}
        <Card $padding="32px" $borderRadius="12px">
          <Typography variant="body">{portfolio.bio}</Typography>
          <Divider margin="24px 0" />
          <Heading level={5} fontWeight="semibold">
            Skills
          </Heading>
          <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
            {portfolio.skills.map((g) => (
              <div key={g.category}>
                <Typography variant="caption" colorType="secondary">
                  {g.category}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: 6,
                  }}
                >
                  {g.items.map((s) => (
                    <Badge key={s} variant="outlined" colorType="primary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card $padding="24px" $borderRadius="12px">
          <Heading level={6} fontWeight="semibold">
            Quick facts
          </Heading>
          <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
            <Fact label="Location" value={portfolio.location} />
            <Fact label="Timezone" value={portfolio.timezone} />
            <Fact label="Email" value={portfolio.email} />
          </div>
          <Divider margin="20px 0" />
          <Link
            to={`/${portfolio.username}/contact`}
            style={{
              color: portfolio.primaryColor,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Contact me →
          </Link>
        </Card>
      </ContentWrapper>
    </>
  );
}

export default About;
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
