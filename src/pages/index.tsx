import React from "react";
import { GetStaticProps } from "next";

import { Emojipasta, getAllEmojipasta } from "../data/emojipasta";
import { ContentContainer } from "../components";

interface IndexProps {
  items: Emojipasta[];
}

const Index: React.FC<IndexProps> = ({ items }) => {
  return (
    <ContentContainer>
      <h1>Emojipasta</h1>
      {items.map((item) => (
        <React.Fragment>
          <h2>{item.title}</h2>
          <p>{item.contents}</p>
        </React.Fragment>
      ))}
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
