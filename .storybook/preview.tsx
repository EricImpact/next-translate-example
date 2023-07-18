import React from "react";
import type { Preview } from "@storybook/react";

import I18nProvider from "next-translate/I18nProvider";
import common from "../locales/en/common.json";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <I18nProvider lang="en" namespaces={{ common }}>
        <Story />
      </I18nProvider>
    ),
  ],
};

export default preview;
