import { get, save } from "@/utils/localStorage";
import { useState, useCallback } from "react";

export const TOKEN_STORAGE_KEY = "authToken";

const useAuth = () => {
  const [token, setToken] = useState(() => {
    return get(TOKEN_STORAGE_KEY) || null;
  });

  const saveToken = useCallback((newToken: string) => {
    setToken(newToken);
    save(TOKEN_STORAGE_KEY, newToken);
  }, []);

  const getToken = useCallback(() => {
    if (token) {
      return token;
    }
    const storedToken = get(TOKEN_STORAGE_KEY);
    if (storedToken) {
      setToken(storedToken);
      return storedToken;
    }
    return null;
  }, [token]);

  return {
    setToken: saveToken,
    getToken,
  };
};

export default useAuth;
