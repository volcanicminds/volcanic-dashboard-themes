import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hook/useAuth";
import useApi from "@/hook/useApi";
import useToast from "@/hook/useToast";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { login, logout } = useApi();
  const { addNotification } = useToast();

  function setTokenAndNavigate(token: string) {
    setToken(token);
    navigate("/");
  }

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "5rem",
      }}
    >
      <Typography variant="h1">Login</Typography>
    </Box>
  );
}
