import { Anchor, Text, Title } from '@mantine/core';
import { FC } from 'react';
import * as classes from './Welcome.css';

export const Welcome: FC = function () {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Exxo
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Labs
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Next.js integration
        follow{" "}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </>
  );
}
