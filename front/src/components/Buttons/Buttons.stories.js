import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    button: {
      options: ["normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    button: "normal",
    className: {},
    text: "Normal",
  },
};
