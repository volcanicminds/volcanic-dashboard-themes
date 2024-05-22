import { Routes, Route } from "react-router-dom";
import Login from "@/page/login";
import PublicLayout from "@/components/publiclayout";
import navigation, {
  NavigationNode,
  isNavigationNode,
} from "@/config/navigation";
import Page from "@/page/page";
import Protected from "./protectedRoute";
import Public from "./publicRoute";
import MainLayout from "../mainlayout";

export default function AppRouter() {
  const renderNavigationNodeRoutes = (
    node: NavigationNode,
    parentPath: string = "/"
  ): JSX.Element[] => {
    const routes: JSX.Element[] = [];
    node.subItems.forEach((item) => {
      if ("subItems" in item) {
        // NavigationNode type element
        routes.push(
          ...renderNavigationNodeRoutes(item, `/${parentPath}/${item.path}`)
        );
      } else {
        // NavigationLeaf type element
        routes.push(
          <Route
            key={`/${parentPath}/${item.path}`}
            path={`/${parentPath}/${item.path}`}
            element={
              <Protected>
                <MainLayout title={item.config.title}>
                  <Page config={item.config} />
                </MainLayout>
              </Protected>
            }
          />
        );
      }
    });
    return routes;
  };

  return (
    <Routes>
      {navigation.map((item) =>
        isNavigationNode(item) ? (
          // NavigationNode type element
          renderNavigationNodeRoutes(item, item.path)
        ) : (
          // NavigationLeaf type element
          <Route
            key={`/${item.path}`}
            path={`/${item.path}`}
            element={
              <Protected>
                <MainLayout title={item.config.title}>
                  <Page config={item.config} />
                </MainLayout>
              </Protected>
            }
          />
        )
      )}

      <Route
        path="/login"
        element={
          <Public>
            <PublicLayout>
              <Login key="LoginPage" />
            </PublicLayout>
          </Public>
        }
      />
    </Routes>
  );
}
