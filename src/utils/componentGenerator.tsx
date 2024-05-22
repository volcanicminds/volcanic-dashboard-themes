
import SimpleCard from "@/components/card/SimpleCard";
import TableData from "@/components/table";
import Form from "@/components/form/form";

export function componentGenerator(component: any) {
  console.log("component?", component);
  if (component.componentType === "Card") {
    return <SimpleCard />
  }
  if (component.componentType === "Table") {
    return <TableData config={component} />
  }
  if (component.componentType === "Form") {
    return <Form config={component} />
  }
}