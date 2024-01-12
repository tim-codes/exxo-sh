import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import React from 'react';
import { FCC } from '../lib/types';
import { theme } from '../theme';

export const metadata = {
  title: "Exxo Labs",
  description: "Professional Services by Tim O'Connell.",
};

const RootLayout: FCC = ({ children }) => (
  <html lang="en">
    <head>
      <ColorSchemeScript />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
    <body>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </body>
  </html>
);

export default RootLayout;
