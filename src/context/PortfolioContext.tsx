import { createContext, useState, useEffect, ReactNode } from "react";

export interface IProject {
  no: string;
  name: string;
  tagline: string;
  blurb: string;
  role: string;
  status: string;
  stack: string[];
  year: string;
  href?: string;
}

export interface IExperience {
  years: string;
  role: string;
  org: string;
  note: string;
}

export interface IPortfolio {
  projects: IProject[];
  experience: IExperience[];
  tools: string[];
  now: string[];
}

interface PortfolioContextType {
  portfolio: IPortfolio | null;
  loading: boolean;
  error: string | null;
}

export const PortfolioContext = createContext<PortfolioContextType>({
  portfolio: null,
  loading: true,
  error: null,
});

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [portfolio, setPortfolio] = useState<IPortfolio | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL || "";
        const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
        const response = await fetch(`${normalizedBaseUrl}/api/portfolio`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio: ${response.statusText}`);
        }
        const data = await response.json();
        setPortfolio(data);
      } catch (err: any) {
        console.error("Error fetching portfolio:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};
