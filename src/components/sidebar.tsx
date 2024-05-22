import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { DRAWER_WIDTH } from "@/utils/config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navigation, {
  NavigationLeaf,
  NavigationNode,
} from "@/config/navigation";
import { useMemo, useState } from "react";
import useDrawer from "@/hook/useDrawer";
import { Button } from "./Button";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(
  MuiDrawer,
  {}
)(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavigationItem: React.FC<{
  item: NavigationNode | NavigationLeaf;
  parentPath: string;
  pathnameArray: Array<string>;
  iteration?: number;
}> = ({ item, parentPath = "/", pathnameArray = [], iteration = 0 }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    if ("subItems" in item) {
      // If the element is a NavigationNode with subitems, do nothing on click
      return;
    } else {
      // If the element is a NavigationLeaf, navigate to the associated path
      const leafPath = parentPath;
      navigate(`/${leafPath}`);
    }
  };

  if ("subItems" in item) {
    // If the element is a NavigationNode, show a clickable ListItem with a Collapse for the subitems
    const nodeItem = item as NavigationNode;
    const [open, setOpen] = useState(
      pathnameArray[iteration] === nodeItem.path
    );

    const handleNodeClick = () => {
      setOpen(!open);
    };

    return (
      <>
        <ListItemButton onClick={handleNodeClick}>
          <ListItemText primary={nodeItem.id} />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            sx={{
              paddingLeft: 2,
            }}
          >
            {nodeItem.subItems.map((subItem, index) => (
              <NavigationItem
                key={index}
                item={subItem}
                parentPath={`${parentPath}/${subItem.path}`}
                pathnameArray={pathnameArray}
                iteration={iteration + 1}
              />
            ))}
          </List>
        </Collapse>
      </>
    );
  } else {
    // Se l'elemento è una NavigationLeaf, mostra un ListItem cliccabile con il testo del label
    const leafItem = item as NavigationLeaf;
    return (
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={leafItem.id} />
      </ListItemButton>
    );
  }
};

export default function Sidebar() {
  const { toggleDrawer, isOpen } = useDrawer(true);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = useMemo(() => {
    return location.pathname.split("/").slice(1);
  }, [location]);

  const drawer = (
    <>
      <DrawerHeader>
        <Button onClick={() => navigate("/")}>Home</Button>
      </DrawerHeader>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <List>
          {navigation.slice(1).map((item, index) => (
            <NavigationItem
              key={index}
              item={item}
              parentPath={item.path}
              pathnameArray={currentPath}
            />
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: "auto" },
        flexShrink: { sm: 0 },
        display: { xs: "none", sm: "block" },
      }}
    >
      <Drawer
        variant="temporary"
        open={!isOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            marginTop: "100px",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer variant="permanent" open={isOpen}>
        {drawer}
      </Drawer>
    </Box>
  );
}
