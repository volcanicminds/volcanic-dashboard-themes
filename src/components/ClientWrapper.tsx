import { ClientContext } from "@/hook/client";
import { TOKEN_STORAGE_KEY } from "@/hook/useAuth";
import { get } from "@/utils/localStorage";
import axios from "axios";

export default function ClientWrapper(props: any) {
  const { children } = props;

  const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  client.interceptors.request.use(async (config: any) => {
    //manage token
  });

  return (
    <ClientContext.Provider
      value={{
        client,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
