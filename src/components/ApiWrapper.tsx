import { ApiContext } from "@/hook/api";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import useClient from "@/hook/useClient";

export const ApiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [reload, setReload] = useState();

  const { client } = useClient();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const forceReload = useCallback(() => {
    setReload({} as any);
  }, []);

  const customizableEndpoint = async (path: string, args?: any) => {
    const params = new URLSearchParams(...args);

    return await client
      .get(path, { params })
      .then((res: any) => {
        if (res.status !== 200) {
          throw new Error(`Network error: ${res.status}, ${res.data}`);
        }

        return res.data;
      })
      .catch((err: any) => {
        return {
          result: "error",
          message: err.message,
        };
      });
  };

  return (
    <ApiContext.Provider
      value={{
        forceReload,
        customizableEndpoint,
        loading,
        reload,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
