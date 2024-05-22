// third-party
import { merge } from "lodash";

// project import
import { Theme } from "@mui/material";
import componentsList from "@/config/themes/componentsIndex";

const componentsCustomization = (themeName: string, theme: Theme) => {
  const components = (
    componentsList as {
      [key: string]: any;
    }
  )[themeName];

  //We need to list the components that we want to customize
  const Button = components["Button"];

  return merge(Button.default(theme));
};

export default componentsCustomization;
