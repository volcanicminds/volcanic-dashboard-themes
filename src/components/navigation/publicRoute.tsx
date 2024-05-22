import useAuth from "@/hook/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";

interface PublicProps {
  children: React.ReactNode;
}

const Public: React.FC<PublicProps> = ({ children }) => {
  const { getToken } = useAuth();
  if (getToken()) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default Public;
