import { Box, Typography } from "@mui/material";

export default function NoMatch() {
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "5rem",
      }}
    >
      <Typography variant="h2">*404*</Typography>
      <Typography color="error">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </Box>
  );
}
