export const getEnvVariable = (name: string) => {
  const env = import.meta.env;
  return env[name];
};

