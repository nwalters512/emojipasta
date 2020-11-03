import React from "react";
import { GetStaticProps } from "next";

import { Emojipasta, getAllEmojipasta } from "../data/emojipasta";
import {
  CardLink,
  ContentContainer,
  Heading,
  Stack,
  Text,
} from "../components";

interface IndexProps {
  items: Emojipasta[];
}

const Index: React.FC<IndexProps> = ({ items }) => {
  return (
    <ContentContainer>
      <h1>Emojipasta</h1>
      <Stack>
        {items.map((item) => (
          <React.Fragment>
            <CardLink href={`/${item.slug}`}>
              <Stack>
                <Heading level={2}>{item.title}</Heading>
                <Text>{item.contents}</Text>
              </Stack>
            </CardLink>
          </React.Fragment>
        ))}
      </Stack>
    </ContentContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllEmojipasta();
  return {
    props: {
      items: data,
    },
  };
};

export default Index;
