import { Args, Meta } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { Panel } from "./stories/default";
import { PANEL_EXCLUDED_CONTROLS } from "./constants";
import { TestDemo } from "./stories/test";
import { CustomHeaderAndCloseButtonDemo } from "./stories/customCloseButton";

export default {
  argTypes: {
    position: {
      control: {
        type: "select",
      },
      options: ["left", "right", "bottom"],
    },
    sdsType: {
      control: {
        type: "select",
      },
      options: ["basic", "overlay"],
    },
    width: {
      control: {
        type: "text",
      },
    },
  },
  component: Panel,
  parameters: {
    badges: [BADGE.BETA],
  },
  title: "Components/Panel",
} as Meta;

// Default

export const Default = {
  args: {
    position: "left",
    sdsType: "basic",
    width: "320px",
  },
};

// With Custom Close Button and Header

export const CustomHeaderAndCloseButton = {
  parameters: {
    controls: {
      exclude: PANEL_EXCLUDED_CONTROLS,
    },
    snapshot: {
      skip: true,
    },
  },
  render: (args: Args) => <CustomHeaderAndCloseButtonDemo {...args} />,
};

// Test

export const Test = {
  parameters: {
    controls: {
      exclude: PANEL_EXCLUDED_CONTROLS,
    },
    snapshot: {
      skip: true,
    },
  },
  render: (args: Args) => <TestDemo {...args} />,
};
