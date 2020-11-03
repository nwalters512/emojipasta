import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Emojipasta, getAllEmojipasta } from "../data/emojipasta";
import { ContentContainer } from "../components";

interface EmojipastaPageProps extends Emojipasta {}

interface EmojipastaPathsParam {
  slug: string;
  [param: string]: any;
}

const EmojipastaPage: React.FC<EmojipastaPageProps> = ({ title, contents }) => {
  return (
    <ContentContainer>
      <h1>{title}</h1>
      <p>{contents}</p>
    </ContentContainer>
  );
};

export default EmojipastaPage;

export const getStaticProps: GetStaticProps<
  EmojipastaPageProps,
  EmojipastaPathsParam
> = async (context) => {
  const { slug } = context.params;
  const { dataBySlug } = await getAllEmojipasta();
  return {
    props: {
      ...dataBySlug[slug],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllEmojipasta();
  return {
    paths: data.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
};
