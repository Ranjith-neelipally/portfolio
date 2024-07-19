interface sessionStorageManager {
  action?: "set" | "get" | "remove" | "clear";
  key: string;
  data?: any;
}

export const SessionStorageManager = ({
  action,
  key,
  data,
}: sessionStorageManager) => {
  switch (action === "set") {
    case true:
      return sessionStorage.setItem(key, JSON.stringify(data));
  }
  switch (action === "get") {
    case true:
      const item = sessionStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      return null;
  }
  switch (action === "remove") {
    case true:
      return sessionStorage.removeItem(key);
  }
  switch (action === "clear") {
    case true:
      return sessionStorage.clear();
  }
};
