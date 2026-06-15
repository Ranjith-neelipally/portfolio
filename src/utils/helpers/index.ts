export const getEnvVariable = (name: string) => {
  if (name === "VITE_REACT_APP_BASE_URL") {
    return import.meta.env.VITE_REACT_APP_BASE_URL;
  }
  if (name === "VITE_REACT_APP_ADMIN_EMAIL") {
    return import.meta.env.VITE_REACT_APP_ADMIN_EMAIL;
  }
  return undefined;
};
