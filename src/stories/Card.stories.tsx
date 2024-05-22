import type { Meta, StoryObj } from "@storybook/react";
import SimpleCard from "@/components/card/SimpleCard";
import { Typography } from "@mui/material";

const meta = {
  title: "Components/Card",
  component: SimpleCard,
  tags: ["basic", "component", "simplecard"],
} satisfies Meta<typeof SimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: <Typography variant="h5">Titolo card</Typography>,
    children: (
      <>
        <Typography>Contenuto 1</Typography>
        <Typography>Contenuto 2</Typography>
      </>
    )
  },
};
