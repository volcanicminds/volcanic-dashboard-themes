import CssBaseline from "@mui/material/CssBaseline";
import { Box, IconButton } from "@mui/material";
import Sidebar from "@/components/sidebar";
import { Menu } from "@mui/icons-material";
import Header from "./header/header";
import useDrawer from "@/hook/useDrawer";
import { ReactNode } from "react";
import { DRAWER_WIDTH } from "@/utils/config";
export interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function MainLayout({ children, title }: MainLayoutProps) {
  const { toggleDrawer, isOpen } = useDrawer(true);

  return (
    <Box
      sx={{
        marginLeft: isOpen ? `${DRAWER_WIDTH}px` : "0",
      }}
    >
      <CssBaseline />
      <Header title={title} />
      <Sidebar />
      <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 3 }}>
        <Box sx={{ width: "100%", display: { xs: "flex", sm: "block" } }}>
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
