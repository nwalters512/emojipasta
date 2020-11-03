import React from "react";
import { GetStaticProps } from "next";
import { FiSearch } from "react-icons/fi";

import { Emojipasta, getAllEmojipasta } from "../data/emojipasta";
import {
  CardLink,
  ContentContainer,
  Heading,
  Input,
  Stack,
  Text,
} from "../components";

interface IndexProps {
  items: Emojipasta[];
}

const Index: React.FC<IndexProps> = ({ items }) => {
  const [search, setSearch] = React.useState("");
  return (
    <ContentContainer>
      <Stack>
        <Input
          value={search}
          onChange={setSearch}
          placeholder="Filter copypasta"
          icon={<FiSearch size="1rem" />}
        />
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
