import { componentGenerator } from "@/utils/componentGenerator";
import { Container } from "@mui/material";

export default function Page({ config }: { config: any }) {
  return (
    <Container>
      <h2>This is a page</h2>
      {config &&
        config?.components?.components?.length > 0 &&
        config?.components?.components?.map((element: any) => {
          return <>{componentGenerator(element)}</>;
        })}
    </Container>
  );
}
