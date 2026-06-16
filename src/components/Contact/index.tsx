import {
  Button,
  Card,
  ContentWrapper,
  Divider,
  Heading,
  Typography,
} from "my-material-theme-ui-components";
import { getPortfolio } from "../../data";

function ContactMe() {
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
            Contact
          </Typography>
          <Heading level={2} fontWeight="bold">
            Get in touch
          </Heading>
          <Typography variant="body" colorType="secondary">
            The fastest way to reach me. I respond within 24 hours on business
            days.
          </Typography>
        </header>

        <Card $padding="32px" $borderRadius="12px">
          <div style={{ display: "grid", gap: 20 }}>
            <Row
              label="Email"
              value={portfolio.email}
              href={`mailto:${portfolio.email}`}
            />
            <Divider />
            <Row label="Location" value={portfolio.location} />
            <Divider />
            <Row label="Timezone" value={portfolio.timezone} />
            <Divider />
            <div>
              <Typography variant="caption" colorType="secondary">
                Elsewhere
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 10,
                }}
              >
                {portfolio.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      $backgroundColor="#fff"
                      $fontColor="#111827"
                      $border="1px solid #E5E7EB"
                      $padding="8px 14px"
                      $borderRadius="8px"
                    >
                      {s.label} →
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <a
          href={`mailto:${portfolio.email}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            $backgroundColor={portfolio.primaryColor}
            $fontColor="#fff"
            $padding="14px 24px"
            $borderRadius="8px"
          >
            Send an email
          </Button>
        </a>
      </ContentWrapper>
    </>
  );
}

export default ContactMe;
function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <Typography variant="caption" colorType="secondary">
        {label}
      </Typography>
      {href ? (
        <a
          href={href}
          style={{ color: "#111827", textDecoration: "none", fontWeight: 500 }}
        >
          {value}
        </a>
      ) : (
        <Typography variant="body" fontWeight="medium">
          {value}
        </Typography>
      )}
    </div>
  );
}
