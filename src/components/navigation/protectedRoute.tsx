import useAuth from "@/hook/useAuth";
import { Navigate } from "react-router-dom";
const Protected = ({ children }: { children: any }) => {
  const { getToken } = useAuth();

  if (!getToken()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
