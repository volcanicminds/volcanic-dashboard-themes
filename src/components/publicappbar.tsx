import { AppBar, Box, Toolbar } from "@mui/material";
import Image from "mui-image";

export default function PublicAppbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ margin: "auto" }}>
          <Image
            easing="none"
            duration={0}
            width={200}
            src="/logo.png"
            fit="contain"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
