import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    input: {
      options: ["active-2", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    input: "active-2",
    className: {},
    text: "Active2",
  },
};
