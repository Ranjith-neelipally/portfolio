import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../Store/Provider";
import { GetAdminDataBySlug } from "../../Store/Action/Admin";

interface PortfolioPageProps {
  component: React.ReactNode;
}

export default function PortfolioPage({ component }: PortfolioPageProps) {
  const { slug } = useParams<{ slug: string }>();
  
  // Fetch admin details by slug
  GetAdminDataBySlug(slug || "");

  const adminState = useAppSelector((state) => state.Admin);

  if (adminState.loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "20px", color: "#666" }}>
        Loading Portfolio...
      </div>
    );
  }

  if (adminState.error || !adminState.data) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "20px", color: "#d9534f" }}>
        {typeof adminState.error === "string" ? adminState.error : "Portfolio not found"}
      </div>
    );
  }

  return <>{component}</>;
}
