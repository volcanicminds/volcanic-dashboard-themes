import prototypeFormPageConfig from "./pages/prototypeFormPage";
import prototypeTablePageConfig from "./pages/prototypeTablePage";
import innerPrototypeTablePageConfig from "./pages/innerPrototypeTablePage";
import homeConfig from "./pages/home";

export interface NavigationNode {
  id: string;
  path: string;
  subItems: Array<NavigationNode | NavigationLeaf>;
}
export interface NavigationLeaf {
  id: string;
  path: string;
  config: any;
}

export const isNavigationNode = (
  item: NavigationNode | NavigationLeaf
): item is NavigationNode => {
  return "subItems" in item;
};

export const isNavigationLeaf = (
  item: NavigationNode | NavigationLeaf
): item is NavigationLeaf => {
  return "path" in item && "page" in item && "config" in item;
};

const navigation: Array<NavigationNode | NavigationLeaf> = [
  {
    id: "Home",
    path: "",
    config: homeConfig,
  },
  {
    id: "Prototype",
    path: "prototypes",
    subItems: [
      {
        id: "Table",
        path: "table",
        config: prototypeTablePageConfig,
      },
      {
        id: "Form",
        path: "form",
        config: prototypeFormPageConfig,
      },
      {
        id: "InnerPrototype",
        path: "inner-prototypes",
        subItems: [
          {
            id: "InnerTable",
            path: "inner-table",
            config: innerPrototypeTablePageConfig,
          },
        ],
      },
    ],
  },
];

export default navigation;
