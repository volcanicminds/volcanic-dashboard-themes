import { Box } from "@mui/material";

export default function Header({ title }: { title?: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
      }}
    >
      {title && <h1>{title}</h1>}
    </Box>
  );
}
