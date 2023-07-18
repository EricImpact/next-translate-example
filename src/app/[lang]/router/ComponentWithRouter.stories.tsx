import type { Meta, StoryObj } from "@storybook/react";

import ComponentWithRouter from "./ComponentWithRouter";

const meta: Meta<typeof ComponentWithRouter> = {
  title: "Component with Router",
  component: ComponentWithRouter,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
