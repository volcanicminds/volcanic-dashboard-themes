export const prototypeTable = [
  {
    accessorKey: "id",
    header: () => "Id",
    footer: (props: any) => props.column.id,
  },
  {
    accessorKey: "width",
    header: () => "Width",
    footer: (props: any) => props.column.width,
  },
  {
    accessorKey: "height",
    header: () => "height",
    footer: (props: any) => props.column.height,
  },
];

export default prototypeTable;
